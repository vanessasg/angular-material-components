import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MenuComponent } from './components/menu/menu.component';
import { ToggleSidebarComponent } from './components/toggle-sidebar/toggle-sidebar.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from './shared/button/button.module';
import { InputModule } from './shared/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToggleSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ButtonModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
