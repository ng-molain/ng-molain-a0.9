export interface NavItem {
  name: string;
  route: string | string[];
  type?: 'submenu' | 'group' | 'item';
  children?: NavItem[];

  // transent, 显示时用， ng-zorro的bug
  level?: number;
}