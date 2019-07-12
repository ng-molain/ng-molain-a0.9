import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { ArticlesComponent } from './center/articles/articles.component';
import { ApplicationsComponent } from './center/applications/applications.component';
import { ProjectsComponent } from './center/projects/projects.component';
import { SettingsComponent } from './settings/settings.component';
import { BasicComponent } from './settings/basic/basic.component';
import { SecurityComponent } from './settings/security/security.component';
import { BindingComponent } from './settings/binding/binding.component';
import { NotificationComponent } from './settings/notification/notification.component';

const routes: Routes = [
  {
    path: 'center', component: CenterComponent, children: [
      { path: '', redirectTo: 'articles', pathMatch: 'full' },
      { path: 'articles', component: ArticlesComponent, data: { titleI18n: 'pro-account-center' } },
      { path: 'applications', component: ApplicationsComponent, data: { titleI18n: 'pro-account-center' }, },
      { path: 'projects', component: ProjectsComponent, data: { titleI18n: 'pro-account-center' }, }
    ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      {
        path: 'base',
        component: BasicComponent,
        data: { titleI18n: 'pro-account-settings' },
      },
      {
        path: 'security',
        component: SecurityComponent,
        data: { titleI18n: 'pro-account-settings' },
      },
      {
        path: 'binding',
        component: BindingComponent,
        data: { titleI18n: 'pro-account-settings' },
      },
      {
        path: 'notification',
        component: NotificationComponent,
        data: { titleI18n: 'pro-account-settings' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
