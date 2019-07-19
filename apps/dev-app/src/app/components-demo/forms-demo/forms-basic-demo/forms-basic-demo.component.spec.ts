import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBasicDemoComponent } from './forms-basic-demo.component';

describe('FormsBasicDemoComponent', () => {
  let component: FormsBasicDemoComponent;
  let fixture: ComponentFixture<FormsBasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsBasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
