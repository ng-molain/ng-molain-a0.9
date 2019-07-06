import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFailDemoComponent } from './result-fail-demo.component';

describe('ResultFailDemoComponent', () => {
  let component: ResultFailDemoComponent;
  let fixture: ComponentFixture<ResultFailDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFailDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFailDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
