export * from './lib/avatar-list/index';
export * from './lib/count-down/index';
export * from './lib/down-file/index';
export * from './lib/ellipsis/index';
export * from './lib/exception/index';
export * from './lib/toolbar/index';
export * from './lib/full-content/index';
export * from './lib/global-footer/index';
export * from './lib/page-header/index';
export * from './lib/result/index';
export * from './lib/details/index';
export * from './lib/sidenav/index';
export * from './lib/forms/index';
export * from './lib/cropper/index';

export * from './lib/pagination/index';
export * from './lib/dynamic-form/index';

// export * from './lib/components.module';

import { NgModule } from '@angular/core';
import { AvatarListModule } from './lib/avatar-list';
import { CountDownModule } from './lib/count-down';
import { DownFileModule } from './lib/down-file';
import { EllipsisModule } from './lib/ellipsis';
import { ExceptionModule } from './lib/exception';
import { ToolbarModule } from './lib/toolbar';
import { FullContentModule } from './lib/full-content';
import { GlobalFooterModule } from './lib/global-footer';
import { PageHeaderModule } from './lib/page-header';
import { ResultModule } from './lib/result';
import { DetailsModule } from './lib/details';
import { SidenavModule } from './lib/sidenav';
import { NgMolainFormsModule } from './lib/forms';

import { PaginationModule } from './lib/pagination';
import { TableModule } from './lib/table';
import { CropperModule } from './lib/cropper';
import { DynamicFormModule } from './lib/dynamic-form';

@NgModule({
  imports: [
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
  ],
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
