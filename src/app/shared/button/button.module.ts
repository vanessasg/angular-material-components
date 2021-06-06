import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ButtonComponent } from './button.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ButtonModule { }
