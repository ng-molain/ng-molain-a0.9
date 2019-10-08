import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-auto-grid-layout-demo',
  templateUrl: './auto-grid-layout-demo.component.html',
  styleUrls: ['./auto-grid-layout-demo.component.scss']
})
export class AutoGridLayoutDemoComponent implements OnInit {

  list = [
    {x: 0, y: 0, w: 4, h: 2},
    {x: 4, y: 0, w: 4, h: 2},
    {x: 8, y: 0, w: 4, h: 2},
    
    {x: 0, y: 2, w: 2, h: 2},
    {x: 2, y: 2, w: 4, h: 2},
    {x: 6, y: 2, w: 4, h: 2},
    {x: 10, y: 2, w: 2, h: 2},
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
