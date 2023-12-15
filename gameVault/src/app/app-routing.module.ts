import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { GamersTableComponentComponent } from './pages/gamers-table-component/gamers-table-component.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [{
    path:'login',
    component:LoginComponent,
},
{
  path:'gamer-registro',
  component:GamerFormComponentComponent,
},
{
  path:'gamers',
  component:GamersTableComponentComponent,
  
},
{
  path:'games-form',
  component:GamesFormComponentComponent,
  canActivate: [AuthGuardService]
  
},
{
  path:'games-table',
  component:GamesTableComponentComponent,
  canActivate: [AuthGuardService]
},
{
  path:'dashboard',
  component:DashboardComponentComponent,
  canActivate: [AuthGuardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
