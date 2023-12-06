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


@NgModule({
  declarations: [    
    AppComponent,
    GamerFormComponentComponent,
    LoginComponent,
  GamersTableComponentComponent,
DashboardComponentComponent,
GamesFormComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
