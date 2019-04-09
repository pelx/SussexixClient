import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Type } from '../interfaces/Type';
import { RecordService } from '../record.service';

@Component({
	selector: 'app-update-record',
	templateUrl: './update-record.component.html',
	styleUrls: [ './update-record.component.css' ]
})
export class UpdateRecordComponent implements OnInit {
	form: FormGroup;
	id: number;

	types: Type[] = [ { value: 'ATM' }, { value: 'FI' }, { value: 'Talk' }, { value: 'Misc' } ];

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<UpdateRecordComponent>,
		private service: RecordService,
		@Inject(MAT_DIALOG_DATA) { StrId, Day, RecordDate, Teacher, Topic, Type, Minuets, Segment, Id }
	) {
		this.id = Id;

		this.form = fb.group({
			strId: [ StrId ],
			day: [ Day ],
			recordDate: [ RecordDate, Validators.required ],
			teacher: [ Teacher, Validators.required ],
			topic: [ Topic, Validators.required ],
			type: [ Type, Validators.required ],
			minuets: [ Minuets ],
			segment: [ Segment ]
		});
	}

	ngOnInit() {}

	close() {
		this.dialogRef.close();
	}
	save() {
		this.form.value.id = this.id;
		console.log('Raw: ', this.form.value);
		this.service.updateRecord(this.id, this.form.value).subscribe((data) => {
			console.log('Record Data : ', data);
		});
	}
}
