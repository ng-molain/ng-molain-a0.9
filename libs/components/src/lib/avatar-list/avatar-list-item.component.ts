import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ml-avatar-list-item',
  template: ''
})
export class AvatarListItemComponent {
  @Input() src: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() tips: string;
}
