import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-new-record',
	templateUrl: './new-record.component.html',
	styleUrls: [ './new-record.component.css' ]
})
export class NewRecordComponent {
	constructor() {}

	recordForm = new FormGroup({
		date: new FormControl(''),
		day: new FormControl(''),
		durationt: new FormControl(''),
		id: new FormControl(''),
		notes: new FormControl(''),
		strId: new FormControl(''),
		teacher: new FormControl(''),
		topic: new FormControl(''),
		type: new FormControl('')
	});
}
