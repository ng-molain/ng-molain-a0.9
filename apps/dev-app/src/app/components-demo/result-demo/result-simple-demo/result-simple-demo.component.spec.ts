import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSimpleDemoComponent } from './result-simple-demo.component';

describe('ResultSimpleDemoComponent', () => {
  let component: ResultSimpleDemoComponent;
  let fixture: ComponentFixture<ResultSimpleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSimpleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSimpleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
