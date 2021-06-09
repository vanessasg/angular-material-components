import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarQueryComponent } from './progress-bar-query.component';

describe('ProgressBarQueryComponent', () => {
  let component: ProgressBarQueryComponent;
  let fixture: ComponentFixture<ProgressBarQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
