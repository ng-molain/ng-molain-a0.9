import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-pro-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  i: any = {
    password: true,
    messages: true,
    todo: true,
  };
  constructor(public msg: NzMessageService) {}

  ngOnInit() {
  }

}
