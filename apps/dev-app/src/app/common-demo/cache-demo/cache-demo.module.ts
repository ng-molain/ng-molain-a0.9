import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { CacheDemoRoutingModule } from './cache-demo-routing.module';
import { BasicUsageDemoComponent } from './basic-usage-demo/basic-usage-demo.component';

@NgModule({
  imports: [
    SharedModule,
    CacheDemoRoutingModule
  ],
  declarations: [
    BasicUsageDemoComponent,
  ],
})
export class CacheDemoModule { }
