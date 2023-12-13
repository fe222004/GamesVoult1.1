import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    const url = 'http://localhost:3000/login';
    return this.http.post(url, credentials);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }
}
