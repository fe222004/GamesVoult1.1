import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  protected login: FormGroup;
  httpClient: any;
 

  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      correo: [null, [Validators.required]],
      contraseña: [null, [Validators.required]],
    });
  }

  save() {
    const url = 'http://localhost:3000/api/gamers';
    console.log(this.login.value) 

    if (this.login) {
      this.httpClient.post(url, this.login.value)
        .subscribe(
          (response: any) => {
            console.log('Solicitud POST exitosa', response);
            // Realiza acciones adicionales después de una respuesta exitosa si es necesario
          },
          (error: any) => {
            console.error('Error al realizar la solicitud POST', error);
            // Maneja el error de manera adecuada, muestra un mensaje al usuario, etc.
          }
        );
    } else {
      console.error('Formulario no válido');
      // Realiza acciones si el formulario no es válido
    }
  }


}
