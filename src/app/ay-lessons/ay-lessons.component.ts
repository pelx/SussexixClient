import { MatTableDataSource } from '@angular/material/table';
import { AyLessonsService } from './../ay-lessons.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AyLessonElement } from '../interfaces/AyLessonElement';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-ay-lessons',
	templateUrl: './ay-lessons.component.html',
	styleUrls: [ './ay-lessons.component.css' ]
})
export class AyLessonsComponent implements OnInit {
	columnsToDisplay: string[] = [ 'lessonId', 'lessonName', 'Actions' ];
	dataSource;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private service: AyLessonsService) {}

	ngOnInit() {
		this.service.getAll().subscribe((data) => {
			console.log('AYLessons: ', data);
			this.dataSource = new MatTableDataSource<AyLessonElement>(data as AyLessonElement[]);
			this.dataSource.paginator = this.paginator;
		});
	}

	applyFilter(filterValue: string) {
		console.log(filterValue);
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
