import { InjectionToken } from '@angular/core';
import { GridViewComponent } from '../../gridbase';
import { DatagridComponent } from '../datagrid/datagrid.component';


export interface DatagridViewComponentInternal extends GridViewComponent {
    grid: DatagridComponent;
}
export const ML_DATAGRID_VIEW = new InjectionToken<DatagridViewComponentInternal>('ML_DATAGRID_VIEW');