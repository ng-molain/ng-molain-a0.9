import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-pro-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  list: any[] = [null];

  loading = true;

  constructor(private http: HttpClient, public msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loading = true;
    this.http.get('/api/list', { params: {count: '8'} }).subscribe((res: any) => {
      this.list = this.list.concat(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

}
