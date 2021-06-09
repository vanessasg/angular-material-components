import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    });
  }

  ngOnInit(){
  }

}

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: 'dialog-content-example.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentExampleComponent{}
