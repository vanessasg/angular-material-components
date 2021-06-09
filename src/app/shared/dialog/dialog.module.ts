import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { DialogComponent } from './dialog.component';
import { DialogContentComponent, DialogContentExampleComponent } from './dialog-content/dialog-content.component';
import { DialogInjectComponent, DialogDataExampleComponent } from './dialog-inject/dialog-inject.component';
import { DialogElementsComponent, DialogEleExampleComponent } from './dialog-elements/dialog-elements.component';
import { DialogFromMenuComponent, DialogMenuComponent } from './dialog-menu/dialog-menu.component';
import { DialogOverviewComponent, DialogOverviewExampleComponent } from './dialog-overview/dialog-overview.component';

@NgModule({
  declarations: [
    DialogComponent,
    DialogContentComponent,
    DialogContentExampleComponent,
    DialogInjectComponent,
    DialogDataExampleComponent,
    DialogElementsComponent,
    DialogEleExampleComponent,
    DialogMenuComponent,
    DialogFromMenuComponent,
    DialogOverviewComponent,
    DialogOverviewExampleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DialogModule {}
