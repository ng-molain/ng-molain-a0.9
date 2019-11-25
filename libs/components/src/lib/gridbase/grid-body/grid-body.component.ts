import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { domHelper } from '../../base';

@Component({
  selector: 'ml-grid-body',
  templateUrl: './grid-body.component.html',
  styleUrls: ['./grid-body.component.scss'],
  host:{class:"f-column f-full"}
})
export class GridBodyComponent{

  @ViewChild("body", {static: false})
  bodyRef: ElementRef;
  @ViewChild("inner", {static: false})
  innerRef: ElementRef;
  @Input()
  columns: GridColumnComponent[];
  @Input()
  rows: any[];
  @Output()
  bodyScroll: EventEmitter<{}>;
  private _scrollTop;
  
  // scrollTop: number;
  get scrollTop(): number {
    return this._scrollTop
  }
  set scrollTop(value) {
    this._scrollTop=value,this.bodyRef.nativeElement.scrollTop=value
  }

  // scrollLeft: number;
  get scrollLeft(): number {
    return this.bodyRef.nativeElement.scrollLeft
  }
  set scrollLeft(value) {
    this.bodyRef.nativeElement.scrollLeft=value
  }

  // readonly scrollbarWidth: number;
  get scrollbarWidth(): number {
    return domHelper.outerWidth(this.bodyRef.nativeElement)-domHelper.outerWidth(this.innerRef.nativeElement)
  }

  constructor() {
    this.bodyScroll=new EventEmitter;
    this._scrollTop=0;
  }

  // onScroll(event: any): void;
  onScroll(event: any): void {
    this.bodyScroll.emit({left:this.bodyRef.nativeElement.scrollLeft,top:this.bodyRef.nativeElement.scrollTop})
  }
}
