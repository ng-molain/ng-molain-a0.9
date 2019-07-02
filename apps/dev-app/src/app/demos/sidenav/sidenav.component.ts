import { Component, OnInit } from '@angular/core';
import { DEMOS_NAV_ITEMS } from '../demos-nav-item';

@Component({
  selector: 'dev-demos-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class DemosSidenavComponent implements OnInit {

  navItems = DEMOS_NAV_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
