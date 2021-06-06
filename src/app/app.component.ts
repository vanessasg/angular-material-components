import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-components';
  menuOpened = true;
  toggle() {
    this.menuOpened = !this.menuOpened;
  }
}
