import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsExamplesModule, COMPONENTS_EXAMPLES } from './components-examples';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsExamplesModule,
  ]
})
export class ExamplesModule {}

export const EXAMPLES = [
  ...COMPONENTS_EXAMPLES
]