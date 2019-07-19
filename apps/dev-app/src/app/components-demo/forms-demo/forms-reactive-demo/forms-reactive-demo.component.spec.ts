import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactiveDemoComponent } from './forms-reactive-demo.component';

describe('FormsReactiveDemoComponent', () => {
  let component: FormsReactiveDemoComponent;
  let fixture: ComponentFixture<FormsReactiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsReactiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
