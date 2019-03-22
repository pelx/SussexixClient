import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	title: string = 'Sussex IX MP3 Records Management Catalogue';

	constructor() {}

	ngOnInit() {}
}
