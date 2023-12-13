import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected login: FormGroup;

  constructor(
    protected httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.login = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      pasword: [null, [Validators.required]],
    });
  }

  iniciar() {
    const url = 'http://localhost:3000/login';
    console.log(this.login.value);
  
    this.httpClient.post(url, this.login.value).subscribe(
      (response: any) => {
        console.log('Solicitud POST exitosa', response);
        
        if (response && response.success) {
          this.authService.setLoggedIn(true); // Establece el estado de autenticación como verdadero
          
          const userRole = response.role || ''; // Asigna el rol del usuario, si está presente
          
          // Verifica el rol del usuario y redirige a la ruta correspondiente según el rol
          switch (userRole) {
            case 'administrador':
              this.router.navigate(['/dashboard']); // Redirige a la ruta de administrador
              break;
            case 'cliente':
              this.router.navigate(['/games-form']); // Redirige a la ruta de cliente
              break;
            default:
              // Manejar un rol desconocido
              console.error('Rol desconocido');
              break;
          }
        } else {
          this.authService.setLoggedIn(false); // Establece el estado de autenticación como falso
          // Realiza acciones en caso de credenciales incorrectas, usuario desactivado, etc.
          console.error('Credenciales incorrectas o usuario desactivado');
        }
      },
      (error: any) => {
        console.error('Error al realizar la solicitud POST', error);
        this.authService.setLoggedIn(false); // Establece el estado de autenticación como falso
        // Maneja el error de manera adecuada, muestra un mensaje al usuario, etc.
      }
    );
  }
  
  
}
