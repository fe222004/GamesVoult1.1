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

  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerCatalogo();
  }

  obtenerCatalogo() {
    this.httpClient.get('http://localhost:3000/api/catalogo').subscribe(
      (respuesta: any) => {
        this.catalogo = respuesta;
      }
    )
  }

}
