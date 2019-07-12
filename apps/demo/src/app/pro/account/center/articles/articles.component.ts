import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-pro-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  list: any[];
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.http.get('/api/list', {params: { count: '8' }}).subscribe((res: any) => {
      this.list = res;
      this.cdr.detectChanges();
    });
  }

  ngOnInit() {
  }

}
