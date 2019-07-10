import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutResultComponent } from './sign-out-result.component';

describe('SignOutResultComponent', () => {
  let component: SignOutResultComponent;
  let fixture: ComponentFixture<SignOutResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
