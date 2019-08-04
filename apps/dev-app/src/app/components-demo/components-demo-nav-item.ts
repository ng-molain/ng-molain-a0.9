import { NavItem } from '../shared';

export const __COMPONENTS_DEMO_NAV_ITEMS: NavItem = {
  name: 'Components', route: 'components', type: 'submenu', children: [
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
        { name: 'Toolbar', route: 'toolbar' },
        { name: 'FullContent', route: 'full-content' },
        { name: 'GlobalFooter', route: 'global-footer' },
        { name: 'PageHeader', route: 'page-header' },
        { name: 'Result', route: 'result' },
        { name: 'Details', route: 'details' },
      ]
    },
    {
      name: 'Forms', route: '', type: 'group', children: [
        { name: 'Simple Forms', route: 'forms' },
      ]
    },
    {
      name: 'Data', route: '', type: 'group', children: [
        { name: 'Pagination', route: 'pagination' },
        { name: 'Table', route: 'table' },
      ]
    }
  ]
};