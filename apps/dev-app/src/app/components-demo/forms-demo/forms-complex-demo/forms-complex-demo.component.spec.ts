import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComplexDemoComponent } from './forms-complex-demo.component';

describe('FormsComplexDemoComponent', () => {
  let component: FormsComplexDemoComponent;
  let fixture: ComponentFixture<FormsComplexDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsComplexDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComplexDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
