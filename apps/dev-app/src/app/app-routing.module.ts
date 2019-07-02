import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule, LayoutDefaultComponent, NotFoundComponent, HomeComponent } from './layout';

const routes: Routes = [
    {
        path: '', component: LayoutDefaultComponent, children: [
            { path: '', component: HomeComponent },
        ]
    },
    { path: 'demos', loadChildren: () => import('./demos/demos.module').then(m => m.DemosModule) },
    {
        path: '**', component: LayoutDefaultComponent, children: [
            { path: '', component: NotFoundComponent }
        ]
    }
];

@NgModule({
    imports: [
        LayoutModule,
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}