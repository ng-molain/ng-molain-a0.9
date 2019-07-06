import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFooterDemoComponent } from './global-footer-demo.component';

describe('GlobalFooterDemoComponent', () => {
  let component: GlobalFooterDemoComponent;
  let fixture: ComponentFixture<GlobalFooterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFooterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFooterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
