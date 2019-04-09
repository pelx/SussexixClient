import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class RecordService {
	baseUrl: string = ' https://localhost:44315/api/records';

	constructor(private http: HttpClient) {}
	getRecord(id) {
		return this.http.get(this.baseUrl + '/' + id);
	}

	getAll() {
		return this.http.get(this.baseUrl);
	}

	createRecord(record) {
		return this.http.post(this.baseUrl, record);
	}

	updateRecord(id, record) {
		return this.http.put(this.baseUrl + '/' + id, record);
	}

	deleteRecord(id) {
		return this.http.delete(this.baseUrl + '/' + id);
	}
}
