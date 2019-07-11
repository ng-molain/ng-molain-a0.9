import { Component, OnInit } from '@angular/core';
import { ApplicationContext } from '@ng-molain/demo/core';

@Component({
  selector: 'demo-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  menus: any;
  
  constructor(
    private applicationContext: ApplicationContext,
  ) {
    this.menus = applicationContext.systemInfo.system.menu;
  }

  ngOnInit() {
  }

}
