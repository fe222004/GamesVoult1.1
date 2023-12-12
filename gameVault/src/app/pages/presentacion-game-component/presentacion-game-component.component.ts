import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
;

@Component({
  selector: 'app-presentacion-game-component',
  templateUrl: './presentacion-game-component.component.html',
  styleUrl: './presentacion-game-component.component.css',
})
export class PresentacionGameComponentComponent {
  coment:any = null;

  protected comentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, protected httpClient: HttpClient) {
    this.comentForm = this.formBuilder.group({
      comentario: [null, [Validators.required]],
    });

    this.obtenerComentario();
  }

  

  saveComent() {
    
    const url = 'http://localhost:3000/comentario';
    console.log(this.comentForm.value) 

    if (this.comentForm.valid) {
      this.httpClient.post('http://localhost:3000/comentario', this.comentForm.value)
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

  obtenerComentario() {
    this.httpClient.get('http://localhost:3000/comentario').subscribe(
      (respuesta: any) => {
        this.coment = respuesta;
      }
    )
  }

  eliminarComentario(id: number){
    console.log('entro a eliminar')
    this.httpClient.delete('http://localhost:3000/comentario/' + id).subscribe(
      respuesta  => {
        this.obtenerComentario();
        alert('Se eliminó');
      }
    );
    console.log('procesando la eliminacion');
  }



}
