import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNestComponent } from './menu-nest.component';

describe('MenuNestComponent', () => {
  let component: MenuNestComponent;
  let fixture: ComponentFixture<MenuNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
