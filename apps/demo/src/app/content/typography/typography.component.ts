import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'demo-content-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {

  constructor(public c: ColorService) {}

  ngOnInit() {
  }

}
