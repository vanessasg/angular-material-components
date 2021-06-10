import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { HomeMenuComponent } from './shared/home-menu/home-menu.component';

const routes: Routes = [
  { path: '', component: HomeMenuComponent },
  { path: 'menu', component: HomeMenuComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'input', component: InputComponent},
  { path: 'dialog', component: DialogComponent },
  { path: 'progress-bar', component: ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
