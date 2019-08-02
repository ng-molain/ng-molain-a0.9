import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss']
})
export class FormsDemoComponent implements OnInit {

  demos = [
    {routerLink: 'basic', name: 'Basic'},
    {routerLink: 'compact', name: 'Compact'},
    {routerLink: 'complex', name: 'Complex'},
    {routerLink: 'horizontal', name: 'Horizontal'},
    {routerLink: 'inline', name: 'Inline'},
    {routerLink: 'line', name: 'Line'},
    {routerLink: 'reactive', name: 'Reactive'},
    {routerLink: 'vertical', name: 'Vertical'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
