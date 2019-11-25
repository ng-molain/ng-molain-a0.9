import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeaderRowComponent } from './grid-header-row.component';

describe('GridHeaderRowComponent', () => {
  let component: GridHeaderRowComponent;
  let fixture: ComponentFixture<GridHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHeaderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
