import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpResultComponent } from './sign-up-result.component';

describe('SignUpResultComponent', () => {
  let component: SignUpResultComponent;
  let fixture: ComponentFixture<SignUpResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
