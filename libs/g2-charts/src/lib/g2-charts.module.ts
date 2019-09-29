import { NgModule } from '@angular/core';
import { G2BarModule } from './bar/index';
import { G2CardModule } from './card/index';
import { G2CustomModule } from './custom/index';
import { G2GaugeModule } from './gauge/index';
import { G2MiniAreaModule } from './mini-area/index';
import { G2MiniBarModule } from './mini-bar/index';
import { G2MiniProgressModule } from './mini-progress/index';
import { G2PieModule } from './pie/index';
import { G2RadarModule } from './radar/index';
import { G2TagCloudModule } from './tag-cloud/index';
import { G2TimelineModule } from './timeline/index';
import { G2WaterWaveModule } from './water-wave/index';
import { G2SingleBarModule } from './single-bar/index';
import { NumberInfoModule } from './number-info/index';
import { TrendModule } from './trend/index';

@NgModule({
  exports: [
    G2BarModule,
    G2CardModule,
    G2CustomModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    G2SingleBarModule,
    NumberInfoModule,
    TrendModule,
  ]
})
export class G2ChartsModule { }
