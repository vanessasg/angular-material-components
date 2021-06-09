import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-menu',
  templateUrl: './dialog-menu.component.html',
  styleUrls: ['./dialog-menu.component.scss']
})
export class DialogMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogFromMenuComponent, {restoreFocus: false});
  }

  ngOnInit(){

  }
}

@Component({
  selector: 'app-dialog-from-menu',
  templateUrl: 'dialog-from-menu.component.html',
  styleUrls: ['./dialog-menu.component.scss']
})
export class DialogFromMenuComponent {}
