import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamerFormComponentComponent } from './pages/gamer-form-component/gamer-form-component.component';


const routes: Routes = [{
  path:'registro',
  component:GamerFormComponentComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
