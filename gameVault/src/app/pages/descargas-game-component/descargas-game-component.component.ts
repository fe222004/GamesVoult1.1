import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { GamesI } from '../../models/games.interface';

@Component({
  selector: 'app-descargas-game-component',
  templateUrl: './descargas-game-component.component.html',
  styleUrl: './descargas-game-component.component.css',
})
export class DescargasGameComponentComponent {
  games: any = null;
  juegoelegido: any = null;

  constructor(protected httpClient: HttpClient, private route: ActivatedRoute) {
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
