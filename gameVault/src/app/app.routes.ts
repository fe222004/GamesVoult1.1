import { Routes } from '@angular/router';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { PresentacionGameComponentComponent } from './pages/presentacion-game-component/presentacion-game-component.component';

export const routes: Routes = [
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

];
