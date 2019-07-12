import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-pro-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  listLoading = true;
  list: any[] = [];
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.http.get('/api/list', { params: { count: '8' } }).subscribe((res: any) => {
      this.list = res;
      this.listLoading = false;
      this.cdr.detectChanges();
    });
  }
  ngOnInit() {
  }

}
