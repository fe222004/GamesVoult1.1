import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
;

@Component({
  selector: 'app-presentacion-game-component',
  templateUrl: './presentacion-game-component.component.html',
  styleUrl: './presentacion-game-component.component.css',
})
export class PresentacionGameComponentComponent {

  protected comentForm: FormGroup;
  httpClient: any;

  constructor(private formBuilder: FormBuilder) {
    this.comentForm = this.formBuilder.group({
      comentario: [null, [Validators.required]],
    });
  }

  crearComentario() {
    const url = 'http://localhost:3000/comentario';
    this.httpClient.post(url, this.comentForm.value).subscribe();
  }

  eliminarComentario(id: number){
    const url = 'http://localhost:3000/comentario'+id;
    this.httpClient.delete(url).subscribe();
  }

  // obtenerComentario(id:number) {
  //this['httpClient'].get('http://localhost:3000/comentario/' + id).subscribe(
  // (respuesta: any) => {
  // this['id'] = respuesta.id;
  //this['comentario'] = respuesta.comentario
  //}
  //)
  //}

  //crearComentario() {
  //console.log('entro a crear')
  //const data = {
  //id :this['id'],
  //comentario: this['comentario'],
  // };
  //console.log('mitad del proceso')
  //this['httpClient'].post('http://localhost:3000/comentario', data).subscribe(
  //(        respuesta: any) => {
  //alert(respuesta);
  //}
  //);
  //console.log('si se creo el pedido')
  //}

  //actualizarComentario(){
  //const data = {
  //id :this['id'],
  //comentario: this['comentario'],

  //};

  //this['httpClient'].put('http://localhost:3000/comentario/' + this['id'], data).subscribe(
  //(      respuesta: any) => {
  //alert(respuesta);
  // }
  //);
  //  }
}
