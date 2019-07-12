import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'demo-pro-step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.scss'],
  providers: [TransferService],
})
export class StepFormComponent implements AfterViewInit {
  constructor(public item: TransferService) {}

  ngAfterViewInit() {
    console.log('item', this.item);
  }
}
