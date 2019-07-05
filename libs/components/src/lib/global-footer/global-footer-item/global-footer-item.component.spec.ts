import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFooterItemComponent } from './global-footer-item.component';

describe('GlobalFooterItemComponent', () => {
  let component: GlobalFooterItemComponent;
  let fixture: ComponentFixture<GlobalFooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalFooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalFooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
