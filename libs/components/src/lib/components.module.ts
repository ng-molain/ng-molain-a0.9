import { NgModule } from '@angular/core';
import { AvatarListModule } from './avatar-list';
import { CountDownModule } from './count-down';
import { DownFileModule } from './down-file';
import { EllipsisModule } from './ellipsis';
import { ExceptionModule } from './exception';
import { ToolbarModule } from './toolbar';
import { FullContentModule } from './full-content';
import { GlobalFooterModule } from './global-footer';
import { PageHeaderModule } from './page-header';
import { ResultModule } from './result';
import { DetailsModule } from './details';
import { SidenavModule } from './sidenav';
import { NgMolainFormsModule } from './forms';

import { PaginationModule } from './pagination';
import { TableModule } from './table';

@NgModule({
  exports: [
    AvatarListModule,
    CountDownModule,
    DownFileModule,
    EllipsisModule,
    ExceptionModule,
    ToolbarModule,
    FullContentModule,
    GlobalFooterModule,
    PageHeaderModule,
    ResultModule,
    DetailsModule,
    SidenavModule,
    PaginationModule,
    TableModule,
    NgMolainFormsModule,
  ]
})
export class NgMolainComponentsModule {}
