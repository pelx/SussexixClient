import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AyLessonsService {
	baseUrl: string = ' https://localhost:44315/api/lessons/';

	constructor(private httpclient: HttpClient) {}

	getAll() {
		return this.httpclient.get(this.baseUrl);
	}
}
