import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { GamersTableComponentComponent } from './pages/gamers-table-component/gamers-table-component.component';


const routes: Routes = [{
  path:'gamer-registro',
  component:GamerFormComponentComponent,
},
{
  path:'gamers-table',
  component:GamersTableComponentComponent,
},
{
  path:'login',
  component:LoginComponent,
},
{
  path:'games-table',
  component:GamesTableComponentComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
