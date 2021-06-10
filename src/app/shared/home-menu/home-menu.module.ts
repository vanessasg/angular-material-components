import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMenuComponent } from './home-menu.component';
import { MaterialModule } from '../../material.module';
import { MenuBasicComponent } from './menu-basic/menu-basic.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { MenuPositionComponent } from './menu-position/menu-position.component';
import { MenuNestComponent } from './menu-nest/menu-nest.component';



@NgModule({
  declarations: [
    HomeMenuComponent,
    MenuBasicComponent,
    MenuIconComponent,
    MenuPositionComponent,
    MenuNestComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeMenuModule { }
