import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridBodyComponent } from './datagrid-body.component';

describe('DatagridBodyComponent', () => {
  let component: DatagridBodyComponent;
  let fixture: ComponentFixture<DatagridBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
