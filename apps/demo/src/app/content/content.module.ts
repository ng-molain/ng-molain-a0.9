import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { ContentRoutingModule } from './content-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { GridMasonryComponent } from './grid-masonry/grid-masonry.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorService } from './services/color.service';

@NgModule({
  imports: [
    SharedModule,
    ContentRoutingModule
  ],
  declarations: [TypographyComponent, GridMasonryComponent, ColorsComponent],
  providers: [
    ColorService
  ]
})
export class ContentModule { }
