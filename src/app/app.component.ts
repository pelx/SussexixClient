import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'Sussex IX Recordings';

	constructor() {
		console.log('Production? ', environment.production);
	}
}
