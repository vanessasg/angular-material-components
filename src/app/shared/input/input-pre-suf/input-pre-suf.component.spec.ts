import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPreSufComponent } from './input-pre-suf.component';

describe('InputPreSufComponent', () => {
  let component: InputPreSufComponent;
  let fixture: ComponentFixture<InputPreSufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPreSufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPreSufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
