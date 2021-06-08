import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateComponent } from './input-error-state.component';

describe('InputErrorStateComponent', () => {
  let component: InputErrorStateComponent;
  let fixture: ComponentFixture<InputErrorStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
