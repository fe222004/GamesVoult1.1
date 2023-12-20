import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PresentacionGameComponentComponent } from './pages/presentacion-game-component/presentacion-game-component.component';
import { DescargasGameComponentComponent } from './pages/descargas-game-component/descargas-game-component.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentacionGameComponentComponent,
    DescargasGameComponentComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
