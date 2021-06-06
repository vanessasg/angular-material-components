import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'input', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
