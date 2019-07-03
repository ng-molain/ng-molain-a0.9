import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { addMinutes } from 'date-fns';

@Component({
  selector: 'dev-count-down-demo',
  templateUrl: './count-down-demo.component.html',
  styleUrls: ['./count-down-demo.component.scss']
})
export class CountDownDemoComponent implements OnInit {

  target = addMinutes(new Date, 10);

  accuracyConfig: any = {
    template: `$!s-ext!秒`,
    leftTime: 30
  };

  constructor(private msg: NzMessageService) { }

  ngOnInit() {
  }

  onEnd() {
    this.msg.success('finised');
  }

}
