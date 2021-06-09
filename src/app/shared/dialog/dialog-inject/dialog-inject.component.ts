import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'cat';
}

@Component({
  selector: 'app-dialog-inject',
  templateUrl: './dialog-inject.component.html',
  styleUrls: ['./dialog-inject.component.scss']
})
export class DialogInjectComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogDataExampleComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}

@Component({
  selector: 'app-dialog-data-example',
  templateUrl: 'dialog-data-example.component.html',
  styleUrls: ['./dialog-inject.component.scss']
})
export class DialogDataExampleComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
