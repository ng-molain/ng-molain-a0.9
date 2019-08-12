import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormOutletComponent } from './dynamic-form-outlet.component';

describe('DynamicFormOutletComponent', () => {
  let component: DynamicFormOutletComponent;
  let fixture: ComponentFixture<DynamicFormOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
