import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate.component';

describe('ProgressBarIndeterminateComponent', () => {
  let component: ProgressBarIndeterminateComponent;
  let fixture: ComponentFixture<ProgressBarIndeterminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarIndeterminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarIndeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
