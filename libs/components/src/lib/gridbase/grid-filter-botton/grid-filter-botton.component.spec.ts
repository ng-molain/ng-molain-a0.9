import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilterBottonComponent } from './grid-filter-botton.component';

describe('GridFilterBottonComponent', () => {
  let component: GridFilterBottonComponent;
  let fixture: ComponentFixture<GridFilterBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFilterBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFilterBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
