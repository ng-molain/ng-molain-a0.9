import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDemoComponent } from './result-demo.component';

describe('ResultDemoComponent', () => {
  let component: ResultDemoComponent;
  let fixture: ComponentFixture<ResultDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
