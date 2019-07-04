import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-ellipsis-demo',
  templateUrl: './ellipsis-demo.component.html',
  styleUrls: ['./ellipsis-demo.component.scss']
})
export class EllipsisDemoComponent implements OnInit {

  article = 'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';

  constructor() { }

  ngOnInit() {
  }

}
