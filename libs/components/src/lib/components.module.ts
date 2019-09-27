import { NgModule } from '@angular/core';
import { AvatarListModule } from './avatar-list/index';
import { CountDownModule } from './count-down/index';
import { DownFileModule } from './down-file/index';
import { EllipsisModule } from './ellipsis/index';
import { ExceptionModule } from './exception/index';
import { ToolbarModule } from './toolbar/index';
import { FullContentModule } from './full-content/index';
import { GlobalFooterModule } from './global-footer/index';
import { PageHeaderModule } from './page-header/index';
import { ResultModule } from './result/index';
import { DetailsModule } from './details/index';
import { SidenavModule } from './sidenav/index';
import { NgMolainFormsModule } from './forms/index';

import { PaginationModule } from './pagination/index';
import { TableModule } from './table/index';
import { CropperModule } from './cropper/index';
import { DynamicFormModule } from './dynamic-form/index';

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
    CropperModule,
    DynamicFormModule,
  ]
})
export class NgMolainComponentsModule {}
