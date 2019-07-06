import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisDemoComponent } from './ellipsis-demo.component';

describe('EllipsisDemoComponent', () => {
  let component: EllipsisDemoComponent;
  let fixture: ComponentFixture<EllipsisDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipsisDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
