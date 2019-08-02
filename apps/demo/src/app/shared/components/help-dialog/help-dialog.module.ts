import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HelpDialogComponent } from './help-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
    ],
    declarations: [
      HelpDialogComponent
    ],
    exports: [
      HelpDialogComponent
    ],
    entryComponents: [
      HelpDialogComponent
    ]
})
export class HelpDialogModule { }