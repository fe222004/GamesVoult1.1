import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargasGameComponentComponent } from './pages/descargas-game-component/descargas-game-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { PresentacionGameComponentComponent } from './pages/presentacion-game-component/presentacion-game-component.component';
import { PrincipalGameComponentComponent } from './pages/principal-game-component/principal-game-component.component';
import { NavegacionComponent } from './pages/navegacion/navegacion.component';

const routes: Routes = [
  {
    path:'games-form',
    component:GamesFormComponentComponent,
  },
  {
    path:'games-table',
    component:GamesTableComponentComponent,
  },
  {
    path:'presentacionGame',
    component:PresentacionGameComponentComponent,
  },
  {
    path:'descargasGame',
    component:DescargasGameComponentComponent,
  },
  {
    path:'principalGame',
    component:PrincipalGameComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
