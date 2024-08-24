import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupContainerComponent } from './container/signup-container/signup-container.component';

const routes: Routes = [
  {
    path:'',
    component: SignupContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
