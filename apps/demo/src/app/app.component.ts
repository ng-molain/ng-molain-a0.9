import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('http://www.baidu.com', {responseType: 'text'}).subscribe(body => {
      console.log(body);
    })
  }
}
