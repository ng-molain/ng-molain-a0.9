import { Component, OnInit, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { GridHeaderComponent } from '../grid-header/grid-header.component';
import { GridFooterComponent } from '../grid-footer/grid-footer.component';
import { GridBodyComponent } from '../grid-body/grid-body.component';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { GridColumnGroupComponent } from '../grid-column-group/grid-column-group.component';

@Component({
  selector: 'ml-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
  host:{"[class]":"viewCls"}
})
export class GridViewComponent {
  @ViewChild("header",{static:false})
  header: GridHeaderComponent;
  @ViewChild("footer",{static:false})
  footer: GridFooterComponent;
  @ViewChild("body",{static:false})
  body: GridBodyComponent;

  @Input() columns: GridColumnComponent[];
  @Input() columnGroup: GridColumnGroupComponent;
  @Input() viewIndex: number;
  @Input() rows: any[];
  @Input() footerRows: any[];
  @Input() filterable: boolean;
  
  @Output() bodyScroll: EventEmitter<{}>;

  // readonly viewCls: string;
  get viewCls(): string {
    return"f-column datagrid-view"+this.viewIndex+(2==this.viewIndex?" f-full":" f-noshrink")
  }

  // scrollTop: number;
  get scrollTop(): number {
    return this.body.scrollTop
  }
  set scrollTop(value) {
    this.body.scrollTop=value
  }

  // headerHeight: number;
  get headerHeight(): number {
    return this.header?this.header.height:0
  }
  set headerHeight(value) {
    this.header&&(this.header.height=value)
  }

  // readonly headerPaddingWidth: number;
  get headerPaddingWidth(): number{
    // By Tony, 调用的时机不对的话， body对象可能为空
    if(!this.body) {
      return null;
    }
    if(2==this.viewIndex){var width=this.body.scrollbarWidth;if(width>0)return width}return null
  }

  constructor() { 
    this.viewIndex=2;
    this.filterable=!1;
    this.bodyScroll=new EventEmitter;
  }

  onBodyScroll(event: any): void { 
    this.header&&(this.header.scrollLeft=event.left),this.footer&&(this.footer.scrollLeft=event.left),this.bodyScroll.emit(event)
  }

}
