import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosLayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: DemosLayoutComponent;
  let fixture: ComponentFixture<DemosLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
