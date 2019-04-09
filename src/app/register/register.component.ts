import { AuthService } from './../auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {
	registerForm: FormGroup;

	constructor(private fb: FormBuilder, private service: AuthService, private router: Router) {
		this.registerForm = fb.group(
			{
				userName: [ '', Validators.required ],
				password: [ '', Validators.required ],
				confirmPassword: [ '', Validators.required ]
			},
			{ validator: matchingFields('password', 'confirmPassword') }
		);
	}

	onSubmit() {
		delete this.registerForm.value.confirmPassword;

		this.service.register(this.registerForm.value).subscribe((data: any) => {
			console.log(data);
			localStorage.setItem('userName', data.userName);
			localStorage.setItem('token_value', data.token);
			this.router.navigate([ '/' ]);
		});
	}
}

function matchingFields(field1, field2) {
	return (form) => {
		if (form.controls[field1].value !== form.controls[field2].value) return { matchingFields: true };
	};
}
