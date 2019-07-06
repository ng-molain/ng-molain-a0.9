import * as _ from 'lodash';
import { NavItem } from '../shared';
import { __COMMON_DEMOS_NAV_ITEMS } from '../common-demo/common-demo-nav-item';
import { __COMPONENTS_DEMO_NAV_ITEMS } from '../components-demo/components-demo-nav-item';


const __DEMOS_NAV_ITEMS: NavItem[] = [
  __COMMON_DEMOS_NAV_ITEMS,
  __COMPONENTS_DEMO_NAV_ITEMS,
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