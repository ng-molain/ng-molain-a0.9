import { NgModule } from '@angular/core';
import { NgMolainDirectivesModule } from './directives/directives.module';
import { NgMolainPipesModule } from './pipes/pipes.module';

@NgModule({
  exports: [
    NgMolainDirectivesModule,
    NgMolainPipesModule
  ]
})
export class NgMolainCommonModule {}
