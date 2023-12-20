import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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
          console.log(userRole)
          // Verifica el rol del usuario y redirige a la ruta correspondiente según el rol
          switch (userRole) {
            case 'administrador':
              this.router.navigate(['/dashboard']); // Redirige a la ruta de administrador
              console.log('hola')
              alert('Bienvenido Administrador')
              break;
            case 'cliente':
              this.router.navigate(['games-form']); // Redirige a la ruta de cliente
              console.log('soy cliente')
              alert('Bienvenido Cliente')
              break;
            default:
              // Manejar un rol desconocido
              console.error('Rol desconocido');
              alert('Si desea ingresar registrese')
              break;
          }
        } else {
          this.authService.setLoggedIn(false); // Establece el estado de autenticación como falso
          // Realiza acciones en caso de credenciales incorrectas, usuario desactivado, etc.
          console.error('Credenciales incorrectas o usuario desactivado');
          alert('Por favor, proceda con su registro/Credenciales incorrectas')
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
