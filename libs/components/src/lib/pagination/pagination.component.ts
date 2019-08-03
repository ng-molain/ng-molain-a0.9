import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination, PageRequest } from './typings/pagination';

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 50, 100, 200, 500, 1000];

@Component({
  selector: 'ml-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() oneIndexedParameter: boolean = false;
  @Input() pagination: Pagination;
  @Input() pageSizeOptions: number[];

  // @Output() sizeChange = new EventEmitter<number>();
  @Output() goto = new EventEmitter<PageRequest>();

  gotoNumber: number;
  activePageSizeOptions: {value: number, label: string, disabled: boolean}[];

  constructor() { }

  ngOnInit() {
  }

  private setActivePageSizeOptions() {
    const { totalElements } = this.pagination;

  }

  gotoPage(page: number, size: number, $event?: KeyboardEvent) {
    
  }
}
