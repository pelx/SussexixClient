import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Type } from '../interfaces/Type';
import { RecordService } from '../record.service';

@Component({
	selector: 'app-new-record',
	templateUrl: './new-record.component.html',
	styleUrls: [ './new-record.component.css' ]
})
export class NewRecordComponent {
	types: Type[] = [ { value: 'ATM' }, { value: 'FI' }, { value: 'Talk' }, { value: 'Misc' } ];

	constructor(private service: RecordService) {}

	recordForm = new FormGroup({
		day: new FormControl('0'),
		id: new FormControl('0'),
		minuets: new FormControl('0'),
		recordDate: new FormControl('', Validators.required),
		segment: new FormControl('0'),
		strId: new FormControl('N'),
		teacher: new FormControl('', Validators.required),
		topic: new FormControl('', Validators.required),
		type: new FormControl('', Validators.required)
	});

	onSubmit() {
		console.log(this.recordForm.value);
		this.service.createRecord(this.recordForm.value).subscribe((record) => {
			console.log('Records - ', record);
		});
	}
}
