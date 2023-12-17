import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedIn = false; // Variable para rastrear el estado de inicio de sesión
  private userRole: string = ''; // Variable para almacenar el rol del usuario

  constructor(private http: HttpClient) { }

  // Método para enviar la solicitud de inicio de sesión al backend
  login(credentials: any): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this.http.post(url, credentials);
  }

  // Método para verificar si el usuario ha iniciado sesión
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para establecer el estado de inicio de sesión
  setLoggedIn(status: boolean) {
    this.loggedIn = status;
  }

  // Método para establecer el rol del usuario
  setUserRole(role: string) {
    this.userRole = role;
  }

  // Método para obtener el rol del usuario
  getUserRole(): string {
    return this.userRole;
  }
}
