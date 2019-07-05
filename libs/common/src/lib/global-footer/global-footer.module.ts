import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFooterComponent } from './global-footer.component';
import { GlobalFooterItemComponent } from './global-footer-item/global-footer-item.component';

@NgModule({
  declarations: [GlobalFooterComponent, GlobalFooterItemComponent],
  imports: [
    CommonModule
  ],
  exports: [GlobalFooterComponent, GlobalFooterItemComponent]
})
export class GlobalFooterModule { }
