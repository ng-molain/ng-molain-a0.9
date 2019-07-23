import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarListOverviewComponent } from './avatar-list-overview/avatar-list-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AvatarListOverviewComponent,
  ],
  exports: [
    AvatarListOverviewComponent,
  ],
  entryComponents: [
    AvatarListOverviewComponent,
  ]
})
export class AvatarListExamplesModule { }

export const AVATAR_LIST_EXAMPLES = [
  { selector: "eg-avatar-list-overview", component: AvatarListOverviewComponent }
];