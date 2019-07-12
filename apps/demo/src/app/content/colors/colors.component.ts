import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { NzMessageService } from 'ng-zorro-antd';
import { copy } from '@ng-molain/common';

@Component({
  selector: 'demo-content-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {

  nums = Array(10)
    .fill(1)
    .map((v, i) => v + i);
  constructor(public c: ColorService, private msg: NzMessageService) {}

  onCopy(str: string) {
    copy(str).then(() => this.msg.success(`Copied Success!`));
  }

}
