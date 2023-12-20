import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-games-form-component',
  templateUrl: './games-form-component.component.html',
  styleUrl: './games-form-component.component.css',
})
export class GamesFormComponentComponent {
  protected formGames: FormGroup;
  generos:any = null;
  

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.formGames = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      fechaactualizacion: [null, [Validators.required]],
      idioma: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      version: [null, [Validators.required]],
      imagen: [null, [Validators.required]],
      archivo: [null, [Validators.required]],
      genero: [null, [Validators.required]],
    });

    this.obtenerGenero();

  }

  obtenerGenero() {
    this.httpClient.get('http://localhost:3000/api/genero').subscribe(
      (respuesta: any) => {
        this.generos = respuesta;
      }
    )
  }

  saveGames() {
    console.log(this.formGames.value);

    if (this.formGames.valid) {
      this.httpClient
        .post('http://localhost:3000/api/games', this.formGames.value)
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
