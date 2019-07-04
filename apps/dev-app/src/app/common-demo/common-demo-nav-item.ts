import { NavItem } from '../shared';

export const __COMMON_DEMOS_NAV_ITEMS: NavItem = {
  name: 'Common', route: 'common', type: 'submenu', children: [
    {
      name: 'Basic', route: '', type: 'group', children: [
        { name: 'AvatarList', route: 'avatar-list' },
        { name: 'CountDown', route: 'count-down' },
        { name: 'DownFile', route: 'down-file' },
        { name: 'Ellipsis', route: 'ellipsis' },
      ]
    },
    {
      name: 'Layout', route: '', type: 'group', children: [
        { name: 'Exception', route: 'exception' },
      ]
    },
  ]
};