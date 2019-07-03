import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownDemoComponent } from './count-down-demo.component';

describe('CountDownDemoComponent', () => {
  let component: CountDownDemoComponent;
  let fixture: ComponentFixture<CountDownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
