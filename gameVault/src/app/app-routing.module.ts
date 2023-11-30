import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargasGameComponentComponent } from './pages/descargas-game-component/descargas-game-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { PresentacionGameComponentComponent } from './pages/presentacion-game-component/presentacion-game-component.component';

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
  }
  ,
  {
    path:'descargasGame',
    component:DescargasGameComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
