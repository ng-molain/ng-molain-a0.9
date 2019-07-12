import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-pro-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  listLoading = true;
  list: any[] = [];
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.http.get('/api/list', { params: { count: '8' } }).subscribe((res: any) => {
      this.list = res.map(item => {
        item.activeUser = this.formatWan(item.activeUser);
        return item;
      });
      this.listLoading = false;
      this.cdr.detectChanges();
    });
  }

  private formatWan(val) {
    const v = val * 1;
    if (!v || isNaN(v)) return '';

    let result = val;
    if (val > 10000) {
      result = Math.floor(val / 10000);
      result = `${result}`;
    }
    return result;
  }

  ngOnInit() {
  }

}
