import { UpdateRecordComponent } from './../update-record/update-record.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecordService } from '../record.service';
import { MatTableDataSource } from '@angular/material/table';
import { RecordElement } from '../interfaces/RecordElement';
import { MatDialog, MatSort, MatPaginator } from '@angular/material';
// import { Howl } from '../../../node_modules/howler';
import { Howl, Howler } from 'howler';

@Component({
	selector: 'app-records',
	templateUrl: './records.component.html',
	styleUrls: [ './records.component.css' ]
})
export class RecordsComponent implements OnInit {
	displayedColumns: string[] = [ 'recordDate', 'teacher', 'topic', 'type', 'actions' ];

	// displayedColumns: string[] = [ 'Date', 'Day', 'Duration', 'Id', 'Notes', 'StrId', 'Teacher', 'Topic', 'Type' ];
	dataSource: any;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	// @ViewChild('audioOption') audioPlayerRef: ElementRef;
	// onAudioPlay() {
	// 	this.audioPlayerRef.nativeElement.play();
	// }

	constructor(private service: RecordService, private dialog: MatDialog) {}

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('All Result: ', data);
			this.dataSource = new MatTableDataSource<RecordElement>(data as RecordElement[]);
			this.dataSource.paginator = this.paginator;
		});
	}

	applyFilter(_filter: string) {
		this.dataSource.filter = _filter.trim().toLowerCase();
	}

	updateRecord(record: any) {
		console.log(record);
		this.dialog.open(UpdateRecordComponent, {
			data:
				{
					Id: record.id,
					Day: record.day,
					StrId: record.strId,
					RecordDate: record.recordDate,
					Teacher: record.teacher,
					Topic: record.topic,
					Type: record.type,
					Minuets: record.minuets,
					Segment: record.segment
				}
		});
	}
	baseUrl: string = ' http://127.0.0.1:8887/records';
	playRecord(record: any) {
		console.log(record);

		var sound = new Howl({
			src: [ '../../assets/S9-001.MP3' ],
			volume: 0.5
		}).play();

		// let audio = new Audio();
		// audio.src = this.baseUrl + '/S9-001.MP3';
		// // audio.src = '../../assets/S9-001.MP3';
		// audio.load();
		// audio.volume = 0.1;
		// audio.play();
	}
}
