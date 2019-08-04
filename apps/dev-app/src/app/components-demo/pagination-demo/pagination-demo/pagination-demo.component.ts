import { Component, OnInit } from '@angular/core';
import { Pagination } from '@ng-molain/components';

@Component({
  selector: 'dev-pagination-demo',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent implements OnInit {

  page: Pagination = {
    first: false,
    last: false,
    number: 1,
    numberOfElements: 10,
    size: 10,
    totalElements: 99,
    totalPages: 10,
  };

  constructor() { }

  ngOnInit() {
  }

}
