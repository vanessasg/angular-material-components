import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputBasicComponent } from './input-basic/input-basic.component';
import { InputComponent } from './input.component';
import { InputClearComponent } from './input-clear/input-clear.component';
import { InputErrorStateComponent } from './input-error-state/input-error-state.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { InputFormComponent } from './input-form/input-form.component';
import { InputHintComponent } from './input-hint/input-hint.component';
import { InputPreSufComponent } from './input-pre-suf/input-pre-suf.component';




@NgModule({
  declarations: [
    InputComponent,
    InputBasicComponent,
    InputClearComponent,
    InputErrorStateComponent,
    InputErrorComponent,
    InputFormComponent,
    InputHintComponent,
    InputPreSufComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }
