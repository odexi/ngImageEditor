/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutocontrastComponent } from './autocontrast.component';

describe('AutocontrastComponent', () => {
  let component: AutocontrastComponent;
  let fixture: ComponentFixture<AutocontrastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocontrastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocontrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
