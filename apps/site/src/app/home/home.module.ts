import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureItemDirective } from './feature/item.directive';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    JumbotronComponent,
    FeatureComponent,
    FeatureItemDirective,
  ],
})
export class HomeModule { }
