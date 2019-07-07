import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { NzListGrid } from 'ng-zorro-antd';
import { DetailItemComponent } from './detail-item/detail-item.component';

@Component({
  selector: 'ml-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() title: string;
  @Input() nzGrid: NzListGrid;
  
  @ContentChildren(DetailItemComponent) children: QueryList<DetailItemComponent>;

  constructor() { }

  ngOnInit() {
  }
}
