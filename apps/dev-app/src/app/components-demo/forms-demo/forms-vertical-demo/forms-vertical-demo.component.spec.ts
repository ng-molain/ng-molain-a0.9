import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsVerticalDemoComponent } from './forms-vertical-demo.component';

describe('FormsVerticalDemoComponent', () => {
  let component: FormsVerticalDemoComponent;
  let fixture: ComponentFixture<FormsVerticalDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsVerticalDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsVerticalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
