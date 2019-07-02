import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mls-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  currentVersion = 'v8.0.0.rc.1';
  olderVersions = ['v7.5.1', 'v0.1.0'];

  constructor() { }

  ngOnInit() {
  }

  toVersion(version: string) {

  }

  changeLange(lang: string) {
    
  }
}
