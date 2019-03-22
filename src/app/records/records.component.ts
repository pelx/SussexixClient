import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { MatTableDataSource } from '@angular/material/table';
import { RecordElement } from '../interfaces/RecordElement';

@Component({
	selector: 'app-records',
	templateUrl: './records.component.html',
	styleUrls: [ './records.component.css' ]
})
export class RecordsComponent implements OnInit {
	displayedColumns: string[] = [ 'recordDate', 'teacher', 'topic', 'minuets' ];

	// displayedColumns: string[] = [ 'Date', 'Day', 'Duration', 'Id', 'Notes', 'StrId', 'Teacher', 'Topic', 'Type' ];
	dataSource: any;

	constructor(private service: RecordService) {}

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('All Result: ', data);
			this.dataSource = new MatTableDataSource<RecordElement>(data as RecordElement[]);
		});
	}
}
