import { NgModule } from '@angular/core';
import { NgMolainDirectivesModule } from './directives/directives.module';
import { NgMolainPipesModule } from './pipes/pipes.module';
import { I18nModule } from './i18n';

@NgModule({
  exports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule,
    I18nModule,
  ]
})
export class NgMolainCommonModule {}
