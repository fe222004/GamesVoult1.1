import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalGameComponentComponent } from './pages/principal-game-component/principal-game-component.component';
import { DescargasGameComponentComponent } from './pages/descargas-game-component/descargas-game-component.component';
import { HttpClientModule } from '@angular/common/http';
import { PresentacionGameComponentComponent } from './pages/presentacion-game-component/presentacion-game-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalGameComponentComponent,
    DescargasGameComponentComponent,
    PresentacionGameComponentComponent
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
