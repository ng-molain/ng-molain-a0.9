import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../layout';
import { SharedModule } from '../shared';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsSidenavComponent } from './docs-sidenav/docs-sidenav.component';
import { DocsViewComponent } from './docs-view/docs-view.component';

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
  ],
})
export class DocsModule { }
