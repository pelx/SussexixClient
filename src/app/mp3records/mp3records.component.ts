import { Mp3record } from './../interfaces/Mp3record';
import { Mp3recordCollection } from './../interfaces/Mp3recordCollection';

import { MatTableDataSource } from '@angular/material/table';
import { Mp3recordService } from './../mp3record.service';
import { Component, OnInit } from '@angular/core';
// import { Subscriber } from 'rxjs';

@Component({
	selector: 'app-mp3records',
	templateUrl: './mp3records.component.html',
	styleUrls: [ './mp3records.component.css' ]
})
export class Mp3recordsComponent implements OnInit {
	displayedColumns: string[] = [ 'Artist', 'Title', 'Name', 'Duration', 'Actions' ];
	dataSource;

	constructor(private service: Mp3recordService) {}

	ngOnInit() {
		this.service.getAll().subscribe((data: Mp3recordCollection) => {
			// let value: Array<Mp3record>;
			// value = data.value;
			//console.log('VALUE:', value);
			console.log('VALUE:', data.value);

			this.dataSource = new MatTableDataSource<Mp3record>(data.value as Mp3record[]);
		});
	}
}
