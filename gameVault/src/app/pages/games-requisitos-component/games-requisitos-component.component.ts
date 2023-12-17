import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-games-requisitos-component',
  templateUrl: './games-requisitos-component.component.html',
  styleUrl: './games-requisitos-component.component.css'
})
export class GamesRequisitosComponentComponent {

  protected formRequisitos: FormGroup;
  games:any = null;
 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.formRequisitos = this.formBuilder.group({
      maximo: [null, [Validators.required]],
      minimo: [null, [Validators.required]],
      games: [null, [Validators.required]],
    });
    this.obtenerJuego();
  }

  obtenerJuego() {
    this.httpClient.get('http://localhost:3000/api/games').subscribe(
      (respuesta: any) => {
        this.games = respuesta;
      }
    )
  }

  save() {
    
    console.log(this.formRequisitos.value) 

    if (this.formRequisitos.valid) {
      this.httpClient.post('http://localhost:3000/api/requisitos', this.formRequisitos.value)
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
