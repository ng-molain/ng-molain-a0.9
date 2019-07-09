import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    @Inject(LOCALE_ID) public localeId: string,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://sparkdev.qimooc.net/api/open/siteInfo5').subscribe(it => {
      console.log(it);
    }, err => console.log('welcome err'));
  }

}
