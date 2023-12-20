import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games-genero-component',
  templateUrl: './games-genero-component.component.html',
  styleUrl: './games-genero-component.component.css'
})
export class GamesGeneroComponentComponent {

  protected formGenero: FormGroup;

 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.formGenero = this.formBuilder.group({
      genero: [null, [Validators.required]],
    });
  }


  save() {
    
    const url = 'http://localhost:3000/api/genero';
    console.log(this.formGenero.value) 

    if (this.formGenero.valid) {
      this.httpClient.post('http://localhost:3000/api/genero', this.formGenero.value)
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
