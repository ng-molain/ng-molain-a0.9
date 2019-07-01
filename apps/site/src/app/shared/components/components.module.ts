import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    DocViewerComponent,
    TableOfContentsComponent,
  ],
  exports: [
    DocViewerComponent,
    TableOfContentsComponent,
  ]
})
export class SharedComponentsModule { }
