import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCompactDemoComponent } from './forms-compact-demo.component';

describe('FormsCompactDemoComponent', () => {
  let component: FormsCompactDemoComponent;
  let fixture: ComponentFixture<FormsCompactDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCompactDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCompactDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
