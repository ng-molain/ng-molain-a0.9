import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'demo-exception-404',
  template: `
    <ml-exception type="404" style="min-height: 500px; height: 80%;"></ml-exception>
  `,
})
export class Exception404Component {
  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }
}
