import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Object1Component } from './object1.component';

describe('Object1Component', () => {
  let component: Object1Component;
  let fixture: ComponentFixture<Object1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Object1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Object1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
