import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  catalogo:any = null;
  misterios:any = null;
  aventura: any = null;
  accion: any = null;
  


  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerCatalogo();
    this.actionMisterio();
    this.actionAventura();
    this.actionAccion();
  }

  obtenerCatalogo() {
    this.httpClient.get('http://localhost:3000/api/catalogo').subscribe(
      (respuesta: any) => {
        this.catalogo = respuesta;
      }
    )
  }

  actionMisterio() {
    this.httpClient.get('http://localhost:3000/acciones').subscribe(
      (respuesta: any) => {
        this.misterios = respuesta;
      }
    )
  }

  actionAventura() {
    this.httpClient.get('http://localhost:3000/acciones/aventura').subscribe(
      (respuesta: any) => {
        this.aventura = respuesta;
      }
    )
  }

  actionAccion() {
    this.httpClient.get('http://localhost:3000/acciones/accion').subscribe(
      (respuesta: any) => {
        this.accion = respuesta;
      }
    )
  }


}
