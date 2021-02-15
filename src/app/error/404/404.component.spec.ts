/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { d404Component } from './404.component';

describe('404Component', () => {
  let component: d404Component;
  let fixture: ComponentFixture<d404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ d404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(d404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
