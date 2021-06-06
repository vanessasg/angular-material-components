import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrls: ['./toggle-sidebar.component.scss']
})
export class ToggleSidebarComponent implements OnInit {
  @Output()
  toggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.toggle.emit(null);
  }

}
