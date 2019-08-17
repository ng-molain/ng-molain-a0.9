import { NgModule } from '@angular/core';
import { NgMolainDirectivesModule } from './directives/directives.module';
import { NgMolainPipesModule } from './pipes/pipes.module';
import { I18nModule } from './i18n/index';
import { CacheModule } from './cache/index';

@NgModule({
  imports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule,
    I18nModule,
    CacheModule,
  ],
  exports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule,
    I18nModule,
    CacheModule,
  ]
})
export class NgMolainCommonModule {}
