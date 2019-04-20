import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHiddenComponent } from './ng-hidden.component';

describe('NgHiddenComponent', () => {
  let component: NgHiddenComponent;
  let fixture: ComponentFixture<NgHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
