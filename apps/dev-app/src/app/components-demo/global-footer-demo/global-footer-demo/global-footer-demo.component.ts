import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-global-footer-demo',
  templateUrl: './global-footer-demo.component.html',
  styleUrls: ['./global-footer-demo.component.scss']
})
export class GlobalFooterDemoComponent implements OnInit {

  basicLinks = [
    {
      title: '帮助',
      href: 'https://ng-molain.com/',
      blankTarget: true
    },
    {
      title: 'Github',
      href: 'https://github.com/ng-molain',
      blankTarget: true
    },
    {
      title: '预览',
      href: 'https://ng-molain.github.io/ng-molain/',
      blankTarget: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
