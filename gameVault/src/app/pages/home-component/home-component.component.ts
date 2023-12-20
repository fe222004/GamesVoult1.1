import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

  games:any = null;
  juego: any= null;

  constructor(protected httpClient: HttpClient, private router: Router){
   this.obtenerInfo();
   this.obtenerJuegos();
  }

  obtenerInfo(){
   this.httpClient.get('http://localhost:3000/api/home').subscribe(
     (respuesta: any) => {
       this.games=respuesta
     }
   )
  }

  obtenerJuegos(){
   this.httpClient.get('http://localhost:3000/api/recomendados').subscribe(
     (respuestas:any) => {
       this.juego= respuestas
     }
   )
  }

}
