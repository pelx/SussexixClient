import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from '../record.service';

@Component({
	selector: 'app-delete-record',
	templateUrl: './delete-record.component.html',
	styleUrls: [ './delete-record.component.css' ]
})
export class DeleteRecordComponent implements OnInit {
	record = {
		day: '',
		strId: '',
		recordDate: '',
		teacher: '',
		topic: '',
		type: '',
		minuets: '',
		segment: ''
	};

	id: any;

	constructor(private route: ActivatedRoute, private service: RecordService, private router: Router) {}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		this.service.getRecord(this.id).subscribe((dt: any) => {
			console.log('Data for delete : ', dt);
			// this.record.day = dt.day;
			// this.record.strId = dt.strId;
			this.record.recordDate = dt.recordDate;
			this.record.teacher = dt.teacher;
			this.record.topic = dt.topic;
			this.record.type = dt.type;
			// this.record.minuets = dt.minuets;
			// this.record.segment = dt.segment;
		});
	}
	cancel() {
		this.router.navigate([ '/' ]);
	}

	confirm() {
		this.service.deleteRecord(this.id).subscribe((dt) => {
			console.log('Deleted: ', dt);
			this.router.navigate([ '/' ]);
		});
	}
}
