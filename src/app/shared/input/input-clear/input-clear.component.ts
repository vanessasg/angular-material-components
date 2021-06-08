import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-clear',
  templateUrl: './input-clear.component.html',
  styleUrls: ['./input-clear.component.scss']
})
export class InputClearComponent implements OnInit {
  @Input()
  value: string = 'Clear me';


  constructor() { }

  ngOnInit() {
  }


}
