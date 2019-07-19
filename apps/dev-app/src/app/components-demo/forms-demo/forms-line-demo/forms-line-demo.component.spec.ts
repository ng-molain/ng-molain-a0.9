import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLineDemoComponent } from './forms-line-demo.component';

describe('FormsLineDemoComponent', () => {
  let component: FormsLineDemoComponent;
  let fixture: ComponentFixture<FormsLineDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsLineDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
