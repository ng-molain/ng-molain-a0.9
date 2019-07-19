import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../../default-layout.service';

@Component({
  selector: 'demo-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  constructor(public readonly layoutService: DefaultLayoutService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.layoutService.toggleSidebarCollapsed();
  }
}
