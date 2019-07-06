import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { addSeconds, format } from 'date-fns';

@Component({
  selector: 'ml-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent {

  @Input() config: {};

  /**
   * 目标时间
   */
  @Input()
  set target(value: number | Date) {
    this.config = {
      template: `$!h!:$!m!:$!s!`,
      stopTime: typeof value === 'number' ? addSeconds(new Date(), value).valueOf() : format(value, 'x'),
    };
  }

  @Output() readonly begin = new EventEmitter<void>();
  @Output() readonly notify = new EventEmitter<number>();
  @Output() readonly finished = new EventEmitter<void>();

  _start() {
    this.begin.emit();
  }

  _notify(time: number) {
    this.notify.emit(time);
  }

  _finished() {
    this.finished.emit();
  }

}
