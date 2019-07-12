import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-exception-500',
  template: `
    <ml-exception type="500" style="min-height: 500px; height: 80%;"></ml-exception>
  `,
})
export class Exception500Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
