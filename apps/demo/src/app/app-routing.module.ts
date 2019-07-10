import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '@ng-molain/demo/layout';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent, children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },

  // passport
  { path: '', loadChildren: () => import('./account/passport/passport.module').then(m => m.PassportModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },

  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}