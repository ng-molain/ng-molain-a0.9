import { NavItem } from '../shared';

export const __DRAG_DROP_DEMO_NAV_ITEMS: NavItem = {
  name: 'DragDrop', route: 'drag-drop', type: 'submenu', children: [
    {
      name: 'DragDrop', route: '', type: 'group', children: [
        { name: 'Draggable', route: 'draggable' },
        { name: 'Resizable', route: 'resizable' },
      ]
    },
    {
      name: 'GridLayout', route: '', type: 'group', children: [
        { name: 'AutoGridLayout', route: 'autoGridLayout' },
      ]
    },
  ]
};