import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

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
      nombre: [null, [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      descripcion: [null, [Validators.required,Validators.pattern('[a-zA-Z]+$'),Validators.maxLength(190)]],
      fechaactualizacion: [null, [Validators.required]],
      idioma: [null, [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
      peso: [null, [Validators.required, Validators.maxLength(6)]],
      version: [null, [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
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
      this.formGames.markAllAsTouched();
      // Realiza acciones si el formulario no es válido
    }
  }


  
}
