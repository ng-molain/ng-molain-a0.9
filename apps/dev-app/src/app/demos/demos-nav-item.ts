export interface NavItem {
  name: string;
  route: string;
  type?: 'submenu' | 'group' | 'item';
  children?: NavItem[];
}

export const DEMOS_NAV_ITEMS: NavItem[] = [
  {
    name: 'Common', route: 'common', type: 'submenu', children: [
      {
        name: 'Basic', route: '', type: 'group', children: [
          { name: 'AvatarList', route: 'avatar-list' }
        ]
      }
    ]
  }
];