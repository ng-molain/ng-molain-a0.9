import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocViewerComponent } from './doc-viewer/doc-viewer.component';

@NgModule({
  declarations: [DocViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [DocViewerComponent]
})
export class SharedComponentsModule { }
