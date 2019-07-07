import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ml-detail-item, ml-detail',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  @Input() term: string;

  @ViewChild("hostTpl", {static: true}) template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }
}
