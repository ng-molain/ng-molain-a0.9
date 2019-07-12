import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-pro-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  loading = false;
  data: any[] = [];

  constructor(
    private http: HttpClient,
    public msg: NzMessageService,
    // private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get('/api/list', { params: { count: '5' } }).subscribe((res: any) => {
      this.data = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  openEdit(record: any = {}) {
    // this.modal.create(EditComponent, { record }, { size: 'md' }).subscribe(res => {
    //   if (record.id) {
    //     record = { ...record, id: 'mock_id', percent: 0, ...res };
    //   } else {
    //     this.data.splice(0, 0, res);
    //     this.data = [...this.data];
    //   }
    //   this.cdr.detectChanges();
    // });
  }

}
