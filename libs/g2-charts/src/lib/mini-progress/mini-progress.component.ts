import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';
import { InputNumber } from 'ng-zorro-antd';

@Component({
  selector: 'g2-mini-progress',
  exportAs: 'g2MiniProgress',
  templateUrl: './mini-progress.component.html',
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[class.g2-mini-progress]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class G2MiniProgressComponent implements OnChanges {
  @Input() color = '#1890FF';
  @Input() @InputNumber() target: number;
  @Input() @InputNumber() percent: number;
  @Input() @InputNumber() strokeWidth: number;

  constructor(private cdr: ChangeDetectorRef) {}

  private fixNum(value: number) {
    return Math.min(Math.max(++value, 0), 100);
  }

  ngOnChanges() {
    this.target = this.fixNum(this.target);
    this.percent = this.fixNum(this.percent);
    this.cdr.detectChanges();
  }
}
