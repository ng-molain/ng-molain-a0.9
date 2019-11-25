import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColumnGroupComponent } from './grid-column-group.component';

describe('GridColumnGroupComponent', () => {
  let component: GridColumnGroupComponent;
  let fixture: ComponentFixture<GridColumnGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridColumnGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
