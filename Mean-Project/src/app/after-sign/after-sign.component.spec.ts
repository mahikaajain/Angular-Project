import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSignComponent } from './after-sign.component';

describe('AfterSignComponent', () => {
  let component: AfterSignComponent;
  let fixture: ComponentFixture<AfterSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
