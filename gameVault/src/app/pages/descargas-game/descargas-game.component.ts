import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-descargas-game',
  templateUrl: './descargas-game.component.html',
  styleUrl: './descargas-game.component.css'
})
export class DescargasGameComponent {
  games: any = null;
  juegoelegido: any = null;

  constructor(protected httpClient: HttpClient, private route: ActivatedRoute,private router: Router ) {
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

  viewGame(id: number) {
    this.router.navigate(['/presentacionGame', id]); 
  }
}
