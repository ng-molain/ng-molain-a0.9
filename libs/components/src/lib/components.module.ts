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
import { SEModule } from './edit';

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

    SEModule,
  ]
})
export class NgMolainComponentsModule {}
