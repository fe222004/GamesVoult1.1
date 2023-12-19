import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { GamersTableComponentComponent } from './pages/gamers-table-component/gamers-table-component.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { NavegateAdmiComponentComponent } from './pages/navegate-admi-component/navegate-admi-component.component';
import { GamersComentariosComponentComponent } from './pages/gamers-comentarios-component/gamers-comentarios-component.component';
import { GamesGeneroComponentComponent } from './pages/games-genero-component/games-genero-component.component';
import { GamesRequisitosComponentComponent } from './pages/games-requisitos-component/games-requisitos-component.component';
import { DescargasGameComponent } from './pages/descargas-game/descargas-game.component';
import { PresentacionGameComponent } from './pages/presentacion-game/presentacion-game.component';
import { NavegacionGameComponent } from './pages/navegacion-game/navegacion-game.component';
import { HttpClientModule } from '@angular/common/http';

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
    DescargasGameComponent,
    PresentacionGameComponent,
    NavegacionGameComponent
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
