import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'ml-table-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() row: any;
  @Input() col: any;

  get value(): any {
    const rowData = this.row;
    const colDef = this.col;

    const { field, valueGetter } = colDef;

    if (!!valueGetter && _.isFunction(valueGetter)) {
      return valueGetter({rowData, colDef});
    }

    if (!!field && _.has(rowData, field)) {
      return _.get(rowData, field);
    }
  }

  get displayValue() {
    const rowData = this.row;
    const colDef = this.col;
    const { valueFormatter } = colDef;
    const value = this.value;
    
    if (!!valueFormatter && _.isFunction(valueFormatter)) {
      return valueFormatter({
        value,
        rowData,
        colDef,
      });
    }

    return value;
  }

  get type() {
    return this.col.type;
  }

  /**
   * TODO: tag 可以加 link
   * @see https://ng.ant.design/components/tag/zh
   */
  get tag() {
    const colDef = this.col;
    const { tags } = colDef;
    
    if (!tags || _.isEmpty(tags)) {
      console.warn(`MlTable column set type as 'tag', but not set 'tags' property`);
      return {};
    }

    return _.get(tags, this.value, {});
  }

  get badge() {
    const colDef = this.col;
    const { badges } = colDef;
    
    if (!badges || _.isEmpty(badges)) {
      console.warn(`MlTable column set type as 'badge', but not set 'badges' property`);
      return {status: 'default'};
    }

    return _.get(badges, this.value, {status: 'default'});
  }

  constructor() { }

  ngOnInit() {
  }

}
