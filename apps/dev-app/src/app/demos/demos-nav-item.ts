import * as _ from 'lodash';

export interface NavItem {
  name: string;
  route: string | string[];
  type?: 'submenu' | 'group' | 'item';
  children?: NavItem[];

  // transent, 显示时用， ng-zorro的bug
  level?: number;
}

const __DEMOS_NAV_ITEMS: NavItem[] = [
  {
    name: 'Common', route: 'common', type: 'submenu', children: [
      {
        name: 'Basic', route: '', type: 'group', children: [
          { name: 'AvatarList', route: 'avatar-list' },
          { name: 'CountDown', route: 'count-down' },
        ]
      }
    ]
  }
];

function _fetchNavItems(navItems) {

  const __patch = (item: NavItem, level = 1, route: string[] = []) => {
    item.level = level;
    const itemRoute = item.route = _.flattenDeep([...route, item.route]).filter(it => !_.isEmpty(it)) as string[];
    if (!_.isEmpty(item.children)) {
      item.children.forEach(it => __patch(it, level + 1, itemRoute));
    }
  };

  if (!_.isEmpty(navItems)) {
    navItems.forEach(it => __patch(it));
  }

  return navItems;
}

export const DEMOS_NAV_ITEMS = _fetchNavItems(__DEMOS_NAV_ITEMS);