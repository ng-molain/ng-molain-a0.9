import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../../default-layout.service';

@Component({
  selector: 'demo-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  sites = [
    {label: '根站点', value: 'root-site'},
    {label: '子站点A', value: 'sub-site-a'},
    {label: '子站点B', value: 'sub-site-b'},
  ];

  constructor(public readonly layoutService: DefaultLayoutService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarCollapsed();
  }
}
