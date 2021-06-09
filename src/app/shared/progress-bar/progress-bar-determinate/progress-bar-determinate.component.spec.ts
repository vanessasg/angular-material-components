import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarDeterminateComponent } from './progress-bar-determinate.component';

describe('ProgressBarDeterminateComponent', () => {
  let component: ProgressBarDeterminateComponent;
  let fixture: ComponentFixture<ProgressBarDeterminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarDeterminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarDeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
