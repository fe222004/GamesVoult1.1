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
import { RegistroComponentComponent } from './pages/registro-component/registro-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { NavComponentComponent } from './pages/nav-component/nav-component.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { GamersRolComponentComponent } from './pages/gamers-rol-component/gamers-rol-component.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeGamerComponent } from './pages/home-gamer/home-gamer.component';
import { PresentacionGameComponent } from './pages/presentacion-game/presentacion-game.component';
import { DescargaGameComponent } from './pages/descarga-game/descarga-game.component';
import { NavGamerComponent } from './pages/nav-gamer/nav-gamer.component';

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
    RegistroComponentComponent,
    HomeComponentComponent,
    NavComponentComponent,
    GamesTableComponentComponent,
    GamersRolComponentComponent,
    CatalogoComponent,
    HomeGamerComponent,
    PresentacionGameComponent,
    DescargaGameComponent,
    NavGamerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
