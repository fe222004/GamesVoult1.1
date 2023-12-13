import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private userRole: string = '';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this.http.post(url, credentials);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }

  setUserRole(role: string) {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }
}
