import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInlineDemoComponent } from './forms-inline-demo.component';

describe('FormsInlineDemoComponent', () => {
  let component: FormsInlineDemoComponent;
  let fixture: ComponentFixture<FormsInlineDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsInlineDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsInlineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
