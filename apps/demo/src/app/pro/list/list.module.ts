import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { ListRoutingModule } from './list-routing.module';
import { ApplicationsComponent } from './applications/applications.component';
import { ArticlesComponent } from './articles/articles.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComboListComponent } from './combo-list/combo-list.component';
import { EditComponent } from './basic-list/edit/edit.component';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  declarations: [
    ApplicationsComponent,
    ArticlesComponent,
    BasicListComponent,
    CardListComponent,
    TableListComponent,
    ProjectsComponent,
    ComboListComponent,
    EditComponent,
  ],
})
export class ListModule { }
