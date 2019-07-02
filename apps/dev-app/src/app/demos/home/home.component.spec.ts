import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: DemosHomeComponent;
  let fixture: ComponentFixture<DemosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
