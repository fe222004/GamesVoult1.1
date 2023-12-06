import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css'
})
export class DashboardComponentComponent {

  games:any = null;
  gamers: any;

  constructor(protected httpClient: HttpClient, private router: Router) {
    this.obtenerGamers();
    this.obtenerGames();
  }

  obtenerGames() {
    this.httpClient.get('http://localhost:3000/api/games').subscribe(
      (respuesta: any) => {
        this.games = respuesta;
      }
    )
  }

  obtenerGamers() {
    this.httpClient.get('http://localhost:3000/api/gamers').subscribe(
      (respuesta: any) => {
        this.gamers = respuesta;
      }
    )
  }
}
