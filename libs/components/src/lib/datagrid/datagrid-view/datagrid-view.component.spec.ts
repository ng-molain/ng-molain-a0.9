import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridViewComponent } from './datagrid-view.component';

describe('DatagridViewComponent', () => {
  let component: DatagridViewComponent;
  let fixture: ComponentFixture<DatagridViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
