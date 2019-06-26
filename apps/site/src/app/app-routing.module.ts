import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from './layout';

const routes: Routes = [

    {
        path: '', component: LayoutDefaultComponent, children: [
            { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}