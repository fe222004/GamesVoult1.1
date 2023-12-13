import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();

      // Lógica de permisos según el rol
      if (userRole === 'administrador') {
        // Ejemplo: Si es administrador, permitir acceso a ciertas rutas
        return true;
      } else if (userRole === 'cliente') {
        // Ejemplo: Si es cliente, permitir acceso a otras rutas
        this.router.navigate(['/cliente']);
        return false;
      }
    }

    this.router.navigate(['/login']); // Redirige al login si no está autenticado o tiene un rol desconocido
    return false;
  }
}
