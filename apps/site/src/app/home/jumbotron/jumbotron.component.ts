import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mls-home-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  banners = [
    {title: 'Basic', image: '/assets/images/screenshot/basic.png', link: '#'},
    {title: 'Pro', image: '/assets/images/screenshot/pro.png', link: '#'},
    {title: 'Ms', image: '/assets/images/screenshot/ms.png', link: '#'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
