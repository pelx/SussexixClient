import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	baseUrl: string = ' https://localhost:44315/api/authentication';
	constructor(private http: HttpClient) {}

	login(user) {
		return this.http.post(this.baseUrl + '/login', user);
	}

	register(user) {
		return this.http.post(this.baseUrl + '/register', user);
	}

	getUserName() {
		return localStorage.getItem('userName');
	}

	get isAuthenticated() {
		return !!localStorage.getItem('token_value');
	}

	logout() {
		localStorage.removeItem('userName');
		localStorage.removeItem('token_value');
	}
}
