import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GamersTableComponentComponent } from './pages/gamers-table-component/gamers-table-component.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { NavegateAdmiComponentComponent } from './pages/navegate-admi-component/navegate-admi-component.component';
import { GamersComentariosComponentComponent } from './pages/gamers-comentarios-component/gamers-comentarios-component.component';
import { GamesGeneroComponentComponent } from './pages/games-genero-component/games-genero-component.component';
import { GamesRequisitosComponentComponent } from './pages/games-requisitos-component/games-requisitos-component.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NavegateGamerComponent } from './pages/navegate-gamer/navegate-gamer.component';
import { HomeGamerComponent } from './pages/home-gamer/home-gamer.component';


@NgModule({
    declarations: [
        AppComponent,
        GamerFormComponentComponent,
        LoginComponent,
        GamersTableComponentComponent,
        DashboardComponentComponent,
        GamesFormComponentComponent,
        NavegateAdmiComponentComponent,
        GamersComentariosComponentComponent,
        GamesGeneroComponentComponent,
        GamesRequisitosComponentComponent,
        CatalogoComponent,
        HomeGamerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NavegateGamerComponent
    ]
})
export class AppModule {}
