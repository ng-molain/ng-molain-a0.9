
export interface DocItem {
  id: string;
  name: string;
  summary?: string;
  packageName?: string;
  examples?: string[];
  article?: string;
  tags?: string[];
  orderNum?: number;
  rawType?: 'text' | 'html' | 'asciidoc' | 'markdown';
  type: 'article' | 'component';
}

export interface DocCategory {
  id: string;
  name: string;
  summary?: string;
  items: (DocItem | DocCategory) [];
}

export interface DocSection {
  name: string;
  summary?: string;
}


const GUIDES = 'guides';
const COMMON = 'common';
const COMPONENTS = 'components';
const DRAG_DROP = 'drag-drop';
export const SECTIONS: {[key: string]: DocSection} = {
  [GUIDES]: {
    name: "Guides",
    summary: "Ng Molain Guides"
  },
  [COMMON]: {
    name: "Common"
  },
  [COMPONENTS]: {
    name: "Components"
  },
  [DRAG_DROP]: {
    name: "DragDrop"
  }
};