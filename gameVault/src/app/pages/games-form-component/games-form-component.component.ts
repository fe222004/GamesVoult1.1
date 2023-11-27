import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
;


@Component({
  selector: 'app-games-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './games-form-component.component.html',
  styleUrl: './games-form-component.component.css'
})
export class GamesFormComponentComponent {
  
  protected gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.gameForm = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      fechaActualizacion: [null, [Validators.required]],
      idioma: [null, [Validators.required]],
      peso: [null, [Validators.required]],
      version: [null, [Validators.required]],
      imagen: [null, [Validators.required]],
      archivo: [null, [Validators.required]],
    });
  }

  crearJuego() {
    console.log('entro a crear')
    const data = {
     gameForm: this.gameForm,
    };
    console.log('mitad del proceso')
    this.httpClient.post('http://localhost:3000/api/games', data).subscribe(
      respuesta => {
        alert(respuesta);
      }
    );
    console.log('si se creo el pedido')
  }

  //raiz catalogo
}
