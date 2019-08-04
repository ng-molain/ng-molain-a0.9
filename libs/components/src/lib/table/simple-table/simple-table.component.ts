import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ml-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  showSerial: boolean;
  showSelect: boolean;
  data: any[];
  loading: boolean;

  columnsVisible: any[];
  rowActions: any;

  get hasData(): boolean {
    return !_.isEmpty(this.data);
  }

  constructor() { }

  ngOnInit() {
    this.showSerial = true;
    this.columnsVisible = [
      {title: 'Col 1'},
      {title: 'Col 2'},
      {title: 'Col 3'},
    ];

    this.data = [
      {},
      {},
      {},
    ]
  }

}
