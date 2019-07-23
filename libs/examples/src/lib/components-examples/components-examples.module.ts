import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarListExamplesModule, AVATAR_LIST_EXAMPLES } from './avatar-list-examples';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    AvatarListExamplesModule
  ]
})
export class ComponentsExamplesModule { }

export const COMPONENTS_EXAMPLES = [
  ...AVATAR_LIST_EXAMPLES
];
