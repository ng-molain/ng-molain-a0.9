import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

  data: any[] = [];
  smallData: any[] = [];
  todoData: any[];
  like = false;
  dislike = false;

  constructor(public msg: NzMessageService, private http: HttpClient, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.http.get('/api/charts/visit').subscribe((res: any[]) => {
      this.data = res;
      this.smallData = res.slice(0, 6);
      this.cdr.detectChanges();
    });
    
    this.http.get('/api/todos').subscribe((result: any[]) => {
      this.todoData = result;
    })
  }

}
