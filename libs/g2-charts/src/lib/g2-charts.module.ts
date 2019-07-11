import { NgModule } from '@angular/core';
import { G2BarModule } from './bar';
import { G2CardModule } from './card';
import { G2CustomModule } from './custom';
import { G2GaugeModule } from './gauge';
import { G2MiniAreaModule } from './mini-area';
import { G2MiniBarModule } from './mini-bar';
import { G2MiniProgressModule } from './mini-progress';
import { G2PieModule } from './pie';
import { G2RadarModule } from './radar';
import { G2TagCloudModule } from './tag-cloud';
import { G2TimelineModule } from './timeline';
import { G2WaterWaveModule } from './water-wave';
import { G2SingleBarModule } from './single-bar';
import { NumberInfoModule } from './number-info';
import { TrendModule } from './trend';

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
