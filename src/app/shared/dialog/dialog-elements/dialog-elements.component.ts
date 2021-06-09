import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.scss']
})
export class DialogElementsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogEleExampleComponent);
  }

  ngOnInit(){
  }

}

@Component({
  selector: 'app-dialog-ele-example',
  templateUrl: 'dialog-ele-example.component.html',
  styleUrls: ['./dialog-elements.component.scss']
})
export class DialogEleExampleComponent {}
