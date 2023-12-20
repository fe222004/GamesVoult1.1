import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-gamer',
    templateUrl: './home-gamer.component.html',
    styleUrl: './home-gamer.component.css'
})
export class HomeGamerComponent {
    homes: any = null;
    tendencias: any = null;
    proximamente: any = null;
    games: any;


    constructor(protected httpClient: HttpClient, private router: Router) {
        this.obtenerHome();
        this.obtenerTendencia();
        this.obtenerProximamente();
    }

    obtenerHome() {
        this.httpClient.get('http://localhost:3000/home').subscribe(
            (respuesta: any) => {
                this.homes = respuesta;
            }
        )
    }

    obtenerTendencia() {
        this.httpClient.get('http://localhost:3000/tendencias').subscribe(
            (respuesta: any) => {
                this.tendencias = respuesta;
            }
        )
    }

    obtenerProximamente() {
        this.httpClient.get('http://localhost:3000/tendencias/proximamente').subscribe(
            (respuesta: any) => {
                this.proximamente = respuesta;
            }
        )
    }

}
