import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoGridLayoutDemoComponent } from './auto-grid-layout-demo.component';

describe('AutoGridLayoutDemoComponent', () => {
  let component: AutoGridLayoutDemoComponent;
  let fixture: ComponentFixture<AutoGridLayoutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoGridLayoutDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoGridLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
