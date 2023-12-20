import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-descargas-game-component',
  templateUrl: './descargas-game-component.component.html',
  styleUrl: './descargas-game-component.component.css',
})
export class DescargasGameComponentComponent {
  games: any = null;
  juegoelegido: any = null;

  constructor(
    protected httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.obtenerGames();
  }

  obtenerGames() {
    this.httpClient
      .get('http://localhost:3000/tarjetas')
      .subscribe((respuesta: any) => {
        this.games = respuesta;
      });
  }

  elegirJuego(game: any) {
    this.juegoelegido = game;
    console.log(this.juegoelegido);
  }

}
