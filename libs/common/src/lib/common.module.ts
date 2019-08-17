import { NgModule } from '@angular/core';
import { NgMolainDirectivesModule } from './directives/directives.module';
import { NgMolainPipesModule } from './pipes/pipes.module';
import { I18nModule } from './i18n/index';
import { NgMolainCacheModule } from './cache/index';

@NgModule({
  imports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule,
    I18nModule,
    NgMolainCacheModule,
  ],
  exports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule,
    I18nModule,
    NgMolainCacheModule,
  ]
})
export class NgMolainCommonModule {}
