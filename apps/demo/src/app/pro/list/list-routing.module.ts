import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { ComboListComponent } from './combo-list/combo-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProjectsComponent } from './projects/projects.component';
import { ApplicationsComponent } from './applications/applications.component';

const routes: Routes = [
  { path: 'table-list', component: TableListComponent },
  { path: 'basic-list', component: BasicListComponent },
  { path: 'card-list', component: CardListComponent },
  {
    path: '',
    component: ComboListComponent,
    children: [
      { path: 'articles', component: ArticlesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'applications', component: ApplicationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
