import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamers-comentarios-component',
  templateUrl: './gamers-comentarios-component.component.html',
  styleUrl: './gamers-comentarios-component.component.css'
})
export class GamersComentariosComponentComponent {

  gamersComentario:any = null;

  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerComentarios();
  }

  obtenerComentarios() {
    this.httpClient.get('http://localhost:3000/api/comentarios').subscribe(
      (respuesta: any) => {
        this.gamersComentario = respuesta;
      }
    )
  }

  eliminarGamer(id: number){
    console.log('entro a eliminar')
    this.httpClient.delete('http://localhost:3000/api/comentarios/' + id).subscribe(
      respuesta => {
        this.obtenerComentarios();
        alert('Se eliminó');
      }
    );
    console.log('procesando la eliminacion');
  }


}
