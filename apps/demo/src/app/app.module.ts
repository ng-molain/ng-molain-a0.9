import { NgModule } from '@angular/core';

import { CoreModule } from '@ng-molain/demo/core';
import { SharedModule } from '@ng-molain/demo/shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from '@ng-molain/demo/layout';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AppLayoutModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
