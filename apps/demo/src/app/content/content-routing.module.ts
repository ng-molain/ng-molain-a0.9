import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { GridMasonryComponent } from './grid-masonry/grid-masonry.component';

const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'gridmasonry', component: GridMasonryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
