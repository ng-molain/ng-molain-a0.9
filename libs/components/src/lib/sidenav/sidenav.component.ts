import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'ml-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() navItems: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
