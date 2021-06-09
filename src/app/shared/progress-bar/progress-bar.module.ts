import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDeterminateComponent } from './progress-bar-determinate/progress-bar-determinate.component';
import { MaterialModule } from '../../material.module';
import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate/progress-bar-indeterminate.component';
import { ProgressBarQueryComponent } from './progress-bar-query/progress-bar-query.component';
import { ProgressBarBufferComponent } from './progress-bar-buffer/progress-bar-buffer.component';
import { ProgressBarConfigComponent } from './progress-bar-config/progress-bar-config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressBarDeterminateComponent,
    ProgressBarIndeterminateComponent,
    ProgressBarQueryComponent,
    ProgressBarBufferComponent,
    ProgressBarConfigComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProgressBarModule { }
