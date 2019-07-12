import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NzMessageService, NzTabChangeEvent } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-pro-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  list: any[] = [];

  data = {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  };

  // opColumns: STColumn[] = [
  opColumns: any[] = [
    { title: '操作类型', index: 'type' },
    { title: '操作人', index: 'name' },
    { title: '执行结果', index: 'status', render: 'status' },
    { title: '操作时间', index: 'updatedAt', type: 'date' },
    { title: '备注', index: 'memo', default: '-' },
  ];

  constructor(public msg: NzMessageService, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get('/api/profile/advanced').subscribe((res: any) => {
      this.data = res;
      // tslint:disable-next-line:no-non-null-assertion
      this.change({ index: 0, tab: null! });
      this.cdr.detectChanges();
    });
  }

  change(args: NzTabChangeEvent) {
    this.list = this.data[`advancedOperation${args.index + 1}`];
  }
}
