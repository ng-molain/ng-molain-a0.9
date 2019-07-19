import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@ng-molain/demo/shared';
import { LayoutDefaultComponent } from './default/default.component';
import { LayoutPassportComponent } from './passport/passport.component';
import { LayoutHeaderComponent } from './default/header/header.component';
import { LayoutSidebarComponent } from './default/sidebar/sidebar.component';
import { LayoutSiteComponent } from './site/site.component';
import { LayoutSiteHeaderComponent } from './site/site-header/site-header.component';
import { LayoutSiteFooterComponent } from './site/site-footer/site-footer.component';
import { TaskComponent } from './default/header/task/task.component';
import { MessageComponent } from './default/header/message/message.component';
import { AcountComponent } from './default/header/acount/acount.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    LayoutDefaultComponent,
    LayoutPassportComponent, 
    LayoutHeaderComponent, 
    LayoutSidebarComponent,
    LayoutSiteComponent,
    LayoutSiteHeaderComponent,
    LayoutSiteFooterComponent,
    TaskComponent,
    MessageComponent,
    AcountComponent,
  ],
  exports: [
    LayoutDefaultComponent, 
    LayoutPassportComponent,
    LayoutHeaderComponent, 
    LayoutSidebarComponent,
    LayoutSiteComponent,
    LayoutSiteHeaderComponent,
    LayoutSiteFooterComponent,
  ]
})
export class AppLayoutModule { }
