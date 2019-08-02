import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { PortalModule } from '@angular/cdk/portal';
import { ExamplesModule } from '@ng-molain/examples';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PortalModule,
    ExamplesModule,
  ],
  declarations: [
    DocViewerComponent,
    TableOfContentsComponent,
    ExampleViewerComponent,
  ],
  exports: [
    DocViewerComponent,
    TableOfContentsComponent,
    ExampleViewerComponent,
  ],
  entryComponents: [
    ExampleViewerComponent,
  ]
})
export class SharedComponentsModule { }
