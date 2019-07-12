import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { AccountRoutingModule } from './account-routing.module';
import { CenterComponent } from './center/center.component';
import { ApplicationsComponent } from './center/applications/applications.component';
import { ArticlesComponent } from './center/articles/articles.component';
import { ProjectsComponent } from './center/projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { BasicComponent } from './settings/basic/basic.component';
import { BindingComponent } from './settings/binding/binding.component';
import { NotificationComponent } from './settings/notification/notification.component';
import { SecurityComponent } from './settings/security/security.component';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    CenterComponent,
    ApplicationsComponent,
    ArticlesComponent,
    ProjectsComponent,
    SettingsComponent,
    BasicComponent,
    BindingComponent,
    NotificationComponent,
    SecurityComponent,
  ],
})
export class AccountModule { }
