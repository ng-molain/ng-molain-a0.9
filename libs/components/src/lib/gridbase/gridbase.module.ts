import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseModule } from '../base';
import { GridBaseComponent } from './grid-base/grid-base.component';
import { GridBodyComponent } from './grid-body/grid-body.component';
import { GridCellDirective } from './directives/grid-cell.directive';
import { GridColumnGroupComponent } from './grid-column-group/grid-column-group.component';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridFilterBottonComponent } from './grid-filter-botton/grid-filter-botton.component';
import { GridFilterRowComponent } from './grid-filter-row/grid-filter-row.component';
import { GridFilterDirective } from './directives/grid-filter.directive';
import { GridFooterComponent } from './grid-footer/grid-footer.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { GridHeaderRowComponent } from './grid-header-row/grid-header-row.component';
import { GridHeaderDirective } from './directives/grid-header.directive';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseModule,
  ],
  declarations: [
    GridBaseComponent,
    GridBodyComponent,
    GridCellDirective,
    GridColumnGroupComponent,
    GridColumnComponent,
    GridFilterBottonComponent,
    GridFilterRowComponent,
    GridFilterDirective,
    GridFooterComponent,
    GridHeaderComponent,
    GridHeaderRowComponent,
    GridHeaderDirective,
    GridViewComponent,
  ],
  exports: [
    GridBaseComponent,
    GridBodyComponent,
    GridCellDirective,
    GridColumnGroupComponent,
    GridColumnComponent,
    GridFilterBottonComponent,
    GridFilterRowComponent,
    GridFooterComponent,
    GridHeaderComponent,
    GridHeaderRowComponent,
    GridViewComponent,
    GridFilterDirective,
  ]
})
export class GridbaseModule { }
