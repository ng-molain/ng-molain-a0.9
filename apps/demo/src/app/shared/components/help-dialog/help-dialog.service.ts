import { Injectable } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { HelpDialogComponent } from './help-dialog.component';

@Injectable({
    providedIn: "root"
})
export class HelpDialogService {

    modalRef: NzModalRef;
    
    constructor(
        private modalService: NzModalService
    ) { }

    open() {
        this.modalService.create({
            nzMask: false,
            nzContent: HelpDialogComponent,
            nzStyle: {
                position: 'absolute',
                right: '32px',
                top: 'unset',
                bottom: '0',
            }
        });
    }

    close() {
        this.modalRef.close();
    }
}