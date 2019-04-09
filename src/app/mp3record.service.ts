import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Mp3recordService {
	baseUrl: string = ' https://localhost:44315/mp3records';

	constructor(private http: HttpClient) {}

	getAll() {
		return this.http.get(this.baseUrl);
	}
}
