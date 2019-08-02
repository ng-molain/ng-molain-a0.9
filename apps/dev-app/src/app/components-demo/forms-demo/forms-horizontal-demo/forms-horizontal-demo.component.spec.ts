import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHorizontalDemoComponent } from './forms-horizontal-demo.component';

describe('FormsHorizontalDemoComponent', () => {
  let component: FormsHorizontalDemoComponent;
  let fixture: ComponentFixture<FormsHorizontalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsHorizontalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsHorizontalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
