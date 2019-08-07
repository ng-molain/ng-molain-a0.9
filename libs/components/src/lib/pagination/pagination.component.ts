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

  activePageSizeOptions: { value: number, label: string, disabled: boolean }[];

  private gotoNumber: number;

  constructor() { }

  ngOnInit() {
    this.setActivePageSizeOptions();
    this.updateGotoNumber();
  }

  get startPage() {
    return this.oneIndexedParameter ? 1 : 0;
  }

  private updateGotoNumber() {
    const { number } = this.pagination;
    this.gotoNumber = this.oneIndexedParameter ? number : number + 1;
  }

  private setActivePageSizeOptions() {
    const { totalElements, size } = this.pagination;

    const sizeOptions = this.pageSizeOptions || DEFAULT_PAGE_SIZE_OPTIONS;

    this.activePageSizeOptions = sizeOptions.filter(it => it <= totalElements || it <= size)
      .map(it => {
        return { value: it, label: `${it}条/页`, disabled: false };
      });
  }

  gotoPage(page: number, size: number) {
    this.pagination.number = page;
    this.pagination.size = size;

    this.goto.emit({ page, size });
    
    this.updateGotoNumber();
  }

  prev() {
    const { first, number, size } = this.pagination;
    const page = (!first && number > this.startPage) ? number - 1 : number;

    this.gotoPage(page, size);
  }

  next() {
    const { last, number, totalPages, size } = this.pagination;
    const page = (!last && number + 1 - this.startPage < totalPages) ? number + 1 : number;

    this.gotoPage(page, size);
  }

  first() {
    const { size } = this.pagination;

    this.gotoPage(this.startPage, size);
  }

  last() {
    const { totalPages, size } = this.pagination;

    this.gotoPage(totalPages - 1 + this.startPage, size);
  }

  jumpToPage(page: number, $event: KeyboardEvent) {
    const { keyCode } = $event;
    const { totalPages, size } = this.pagination;
    if (keyCode === 13 && !gotoInputValidator(page, 1, totalPages)) {
      this.gotoPage(page - 1 + this.startPage, size);
    }
  }
}

function gotoInputValidator(value: any, min: number, max: number): void | { error: true } {
  const reg = new RegExp("^[0-9]*$");
  if (value === null || value === undefined || !reg.test(value.toString()) || +value < min || +value > max) {
    return { error: true };
  }
}
