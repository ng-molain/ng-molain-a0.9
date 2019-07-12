import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMasonryComponent } from './grid-masonry.component';

describe('GridMasonryComponent', () => {
  let component: GridMasonryComponent;
  let fixture: ComponentFixture<GridMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
