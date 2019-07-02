import { Component, OnInit, ViewChildren } from '@angular/core';
import { featuresCN } from './features.data';

@Component({
  selector: 'mls-home-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  features = featuresCN;

  // @ViewChildren()

  constructor() { }

  ngOnInit() {
  }

}
