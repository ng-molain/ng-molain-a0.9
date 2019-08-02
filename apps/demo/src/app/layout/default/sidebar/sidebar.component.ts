import { Component, OnInit } from '@angular/core';
import { ApplicationContext } from '@ng-molain/demo/core';
import * as _ from 'lodash';
import { TranslateService } from '@ng-molain/common';


@Component({
  selector: 'demo-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  menus: any;

  constructor(
    private applicationContext: ApplicationContext,
    private translateService: TranslateService,
  ) {
    const menus = _.cloneDeep(applicationContext.systemInfo.menu);
    visit(menus, (it, level) => {
      it.name = translateService.instant(it.i18n) || it.text;
      it.route = it.link;
      it.level = level;
      it.type = it.group ? 'group' : (_.has(it, 'children') ? 'submenu' : 'menuitem')
    });
    this.menus = menus;
  }

  ngOnInit() {
  }

}

function visit(nodes: any[], callback: (node: any, level: number) => void = () => { }, level: number = 0, deepInBy: string = 'children') {
  const forIn = (_nodes: any[], _level: number = level) => {
    if (!_.isArray(_nodes) || _.isEmpty(_nodes) || !_.isFunction(callback)) {
      return;
    }

    _nodes.forEach(node => {
      callback(node, _level);

      if (!!deepInBy && _.has(node, deepInBy)) {
        const children = _.get(node, deepInBy);
        forIn(children, _level + 1);
      }
    });
  }

  forIn(nodes);
}
