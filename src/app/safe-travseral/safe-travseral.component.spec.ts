import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTravseralComponent } from './safe-travseral.component';

describe('SafeTravseralComponent', () => {
  let component: SafeTravseralComponent;
  let fixture: ComponentFixture<SafeTravseralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTravseralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTravseralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
