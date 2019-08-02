import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExamplesComponent } from './component-examples.component';

describe('ComponentExamplesComponent', () => {
  let component: ComponentExamplesComponent;
  let fixture: ComponentFixture<ComponentExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
