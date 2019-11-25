import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridBasicDemoComponent } from './datagrid-basic-demo.component';

describe('DatagridBasicDemoComponent', () => {
  let component: DatagridBasicDemoComponent;
  let fixture: ComponentFixture<DatagridBasicDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagridBasicDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
