import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosSidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: DemosSidenavComponent;
  let fixture: ComponentFixture<DemosSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
