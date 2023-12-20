import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-presentacion-game-component',
  templateUrl: './presentacion-game-component.component.html',
  styleUrl: './presentacion-game-component.component.css',
})
export class PresentacionGameComponentComponent {

  idGames = this.route.snapshot.params['id']
  game:any = {}

  tarjetas: any = null;

  juegostop: any = null;
  coment: any = null;

  protected comentForm: FormGroup;
  protected editingMode!: boolean;
  protected id!: number;

  constructor(
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  
    this.comentForm = this.formBuilder.group({
      comentario: [null, [Validators.required]],
    });

    this.obtenerComentario();
    this.obtenerGames();
    
  }

  saveComent() {
    const url = 'http://localhost:3000/comentarios';
    console.log(this.comentForm.value);

    if (this.comentForm.valid) {
      this.httpClient
        .post('http://localhost:3000/comentarios', this.comentForm.value)
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
    this.httpClient
      .get('http://localhost:3000/comentarios')
      .subscribe((respuesta: any) => {
        this.coment = respuesta;
      });
  }


  obtenerGames() {
    this.httpClient
      .get('http://localhost:3000/top')
      .subscribe((respuesta: any) => {
        this.juegostop = respuesta;
      });
      
  }
  
 

  resetFormComent() {
    this.editingMode = false; // Cambiar al modo de edición falso
    this.comentForm.reset(); // Reiniciar el formulario
  }

 

  
}
