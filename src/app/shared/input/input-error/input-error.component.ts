import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent implements OnInit {
  @Input()
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
