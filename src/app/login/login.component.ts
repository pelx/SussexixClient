import { Type } from './../interfaces/Type';
import { AuthService } from './../auth.service';
import { Component, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent {
	loginData = {
		userName: '',
		password: ''
	};
	constructor(private auth: AuthService, private router: Router) {}

	login() {
		this.auth.login(this.loginData).subscribe(
			(dt: any) => {
				console.log(dt);
				localStorage.setItem('userName', dt.userName);
				localStorage.setItem('token_value', dt.token);
				this.router.navigate([ '/' ]);
			},
			(error: any) => alert('Error login in')
		);
	}
}
