import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridTableComponent } from './datagrid-table.component';

describe('DatagridTableComponent', () => {
  let component: DatagridTableComponent;
  let fixture: ComponentFixture<DatagridTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
