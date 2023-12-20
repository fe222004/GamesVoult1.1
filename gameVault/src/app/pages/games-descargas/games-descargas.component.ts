import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-games-descargas',
  templateUrl: './games-descargas.component.html',
  styleUrl: './games-descargas.component.css'
})
export class GamesDescargasComponent {

  games: any = null;
  juegoelegido: any = null;

  constructor(protected httpClient: HttpClient, private route: ActivatedRoute, private router: Router ) {
    this.obtenerGames();
  }

  obtenerGames() {
    this.httpClient
      .get('http://localhost:3000/tarjetas')
      .subscribe((respuesta: any) => {
        this.games = respuesta;
      });
  }

  elegirPelicula(game: any) {
    this.juegoelegido = game;
    console.log(this.juegoelegido);
  }

}
