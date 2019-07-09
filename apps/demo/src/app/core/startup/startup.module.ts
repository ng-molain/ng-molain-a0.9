import { NgModule, APP_INITIALIZER } from '@angular/core';
import { StartupService } from './startup.service';

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}

@NgModule({
  providers: [
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    }
  ]
})
export class StartupModule { }
