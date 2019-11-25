import { Component, OnInit, ViewChild, InjectionToken, forwardRef, ViewEncapsulation } from '@angular/core';
import { DatagridBodyComponent } from '../datagrid-body/datagrid-body.component';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { GridViewComponent } from '../../gridbase';
import { ML_DATAGRID_VIEW } from '../datagrid-body/datagrid-view.typings';

@Component({
  selector: 'ml-datagrid-view',
  templateUrl: './datagrid-view.component.html',
  styleUrls: ['./datagrid-view.component.scss'],
  providers: [
    { provide: ML_DATAGRID_VIEW, useExisting: forwardRef(() => DatagridViewComponent) }
  ],
  encapsulation: ViewEncapsulation.None,
  host:{"[class]":"viewCls"}
})
export class DatagridViewComponent extends GridViewComponent {
  // grid: DataGridComponent;
  @ViewChild("body", { static: false })
  body: DatagridBodyComponent;

  constructor(public grid: DatagridComponent) {
    super();
  }

  onHeaderCellClick(event: any): void {
    event.column.sortable && (this.grid.addSort(event.column), this.grid.data = this.grid.data, this.body.vscroll && this.body.vscroll.refresh(), this.grid.sortChange.emit(this.grid.sorts))
  }

}
