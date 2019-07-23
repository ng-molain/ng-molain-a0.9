import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../layout';
import { SharedModule } from '../shared';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsSidenavComponent } from './docs-sidenav/docs-sidenav.component';
import { DocsViewComponent } from './docs-view/docs-view.component';
import { ComponentViewComponent } from './component-view/component-view.component';
import { ComponentOverviewComponent } from './component-view/component-overview/component-overview.component';
import { ComponentApiComponent } from './component-view/component-api/component-api.component';
import { ComponentExamplesComponent } from './component-view/component-examples/component-examples.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocsRoutingModule,
    LayoutModule,
  ],
  declarations: [
    DocsHomeComponent,
    DocsSidenavComponent,
    DocsViewComponent,
    ComponentViewComponent,
    ComponentOverviewComponent,
    ComponentApiComponent,
    ComponentExamplesComponent,
  ],
})
export class DocsModule { }
