import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';
import { LoginComponent } from './pages/login/login.component';
import { GamesTableComponentComponent } from './pages/games-table-component/games-table-component.component';
import { GamersTableComponentComponent } from './pages/gamers-table-component/gamers-table-component.component';
import { DashboardComponentComponent } from './pages/dashboard-component/dashboard-component.component';
import { GamesFormComponentComponent } from './pages/games-form-component/games-form-component.component';
import { AuthGuardService } from './auth-guard.service';
import { NavegateAdmiComponentComponent } from './pages/navegate-admi-component/navegate-admi-component.component';
import { GamersComentariosComponentComponent } from './pages/gamers-comentarios-component/gamers-comentarios-component.component';
import { GamesRequisitosComponentComponent } from './pages/games-requisitos-component/games-requisitos-component.component';
import { GamesGeneroComponentComponent } from './pages/games-genero-component/games-genero-component.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeGamerComponent } from './pages/home-gamer/home-gamer.component';

const routes: Routes = [{
    path:'login',
    component:LoginComponent,
},
{
  path:'registro/:id',
  component:GamerFormComponentComponent,
},
{
  path:'dashboard',
  component:DashboardComponentComponent,
  
  
},
{
  path:'games-table',
  component:GamesTableComponentComponent,
  
},
{
  path:'gamers-table',
  component:GamersTableComponentComponent,
  
},
{
  path:'games-form',
  component:GamesFormComponentComponent,
  
  
},
{
  path:'gamers-comentario',
  component:GamersComentariosComponentComponent,
  
  
},
{
  path:'genero',
  component:GamesGeneroComponentComponent,
  
  
},
{
  path:'requisitos',
  component:GamesRequisitosComponentComponent,
  
  
},
{
  path: 'catalogo',
  component:CatalogoComponent,
},
{
  path: 'home',
  component:HomeGamerComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
