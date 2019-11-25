import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilterRowComponent } from './grid-filter-row.component';

describe('GridFilterRowComponent', () => {
  let component: GridFilterRowComponent;
  let fixture: ComponentFixture<GridFilterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFilterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFilterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
