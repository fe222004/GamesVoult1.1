import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private authService: AuthService
  ) {
    this.login = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      pasword: [null, [Validators.required]],
    });
  }

  iniciar() {
    const url = 'http://localhost:3000/login';
    console.log(this.login.value);

    if (this.login.valid) {
      this.httpClient.post(url, this.login.value)
        .subscribe(
          (response: any) => {
            console.log('Solicitud POST exitosa', response);
            if (response.success) {
              this.authService.setLoggedIn(true); // Establece el estado de autenticación como verdadero
              // Realiza acciones adicionales después de una respuesta exitosa si es necesario
            } else {
              this.authService.setLoggedIn(false); // Establece el estado de autenticación como falso
              // Realiza acciones adicionales en caso de credenciales incorrectas, usuario desactivado, etc.
            }
          },
          (error: any) => {
            console.error('Error al realizar la solicitud POST', error);
            this.authService.setLoggedIn(false); // Establece el estado de autenticación como falso
            // Maneja el error de manera adecuada, muestra un mensaje al usuario, etc.
          }
        );
    } else {
      console.error('Formulario no válido');
      // Realiza acciones si el formulario no es válido
    }
  }
}
