import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-exception-403',
  template: `
    <ml-exception type="403" style="min-height: 500px; height: 80%;"></ml-exception>
  `,
})
export class Exception403Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
