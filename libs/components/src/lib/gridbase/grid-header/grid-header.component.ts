import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { GridColumnGroupComponent } from '../grid-column-group/grid-column-group.component';
import { domHelper } from '../../base';

@Component({
  selector: 'ml-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss'],
  host:{class:"f-column f-noshrink"}
})
export class GridHeaderComponent {
  @ViewChild("header", {static: false})
  headerRef: ElementRef;
  @ViewChild("content", {static: false})
  contentRef: ElementRef;

  @Input() columns: GridColumnComponent[];
  @Input() columnGroup: GridColumnGroupComponent;
  @Input() paddingWidth: number;
  @Input() filterable: boolean;
  @Input() grid: any;
  @Output() cellClick: EventEmitter<{}>;
  
  hoverColumn: GridColumnComponent;
  
  // readonly filterOnTop: boolean;
  get filterOnTop(): boolean {
    return!(!this.grid.filterable||"both"!=this.grid.filterPosition&&"top"!=this.grid.filterPosition)
  }

  // readonly filterOnBottom: boolean;
  get filterOnBottom(): boolean {
    return!(!this.grid.filterable||"both"!=this.grid.filterPosition&&"bottom"!=this.grid.filterPosition)
  }

  _height: number;
  // height: number;
  get height(): number {
    return domHelper.outerHeight(this.contentRef.nativeElement)
  }
  set height(value) {
    this._height=value?value-1:value
  }

  // scrollLeft: number;
  get scrollLeft(): number {
    return this.headerRef.nativeElement.scrollLeft
  }
  set scrollLeft(value){
    this.headerRef.nativeElement.scrollLeft=value
  }

  constructor() { 
    this.paddingWidth=0;
    this.filterable=!1;
    this.grid=null;
    this.cellClick=new EventEmitter;
  }
  
  onCellClick(event: any, col: any): void{
    this.cellClick.emit({column:col,originalEvent:event})
  }
  onColumnResizing(event: any, col: any): void{
    event.target.hostRef.nativeElement.style.width=null,event.target.hostRef.nativeElement.style.left=null,event.target.hostRef.nativeElement.style.top=null,col.width=domHelper.toStyleValue(event.width)
  }
  onColumnResizeStop(event: any, col: any): void{
    event.target.hostRef.nativeElement.style.width=null,event.target.hostRef.nativeElement.style.left=null,event.target.hostRef.nativeElement.style.top=null,col.width=domHelper.toStyleValue(event.width)
  }
  

}
