import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { PageHeaderDemoRoutingModule } from './page-header-demo-routing.module';
import { PageHeaderDemoComponent } from './page-header-demo/page-header-demo.component';
import { PageHeaderSimpleDemoComponent } from './page-header-simple-demo/page-header-simple-demo.component';
import { PageHeaderStructureDemoComponent } from './page-header-structure-demo/page-header-structure-demo.component';
import { PageHeaderStandardDemoComponent } from './page-header-standard-demo/page-header-standard-demo.component';
import { PageHeaderImageDemoComponent } from './page-header-image-demo/page-header-image-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PageHeaderDemoRoutingModule,
  ],
  declarations: [
    PageHeaderDemoComponent,
    PageHeaderSimpleDemoComponent,
    PageHeaderStructureDemoComponent,
    PageHeaderStandardDemoComponent,
    PageHeaderImageDemoComponent,
  ],
})
export class PageHeaderDemoModule { }
