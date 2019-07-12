import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { zip } from 'rxjs';

@Component({
  selector: 'demo-pro-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private msg: NzMessageService) {}
  avatar = '';
  userLoading = true;
  user: any;

  // #region geo

  provinces: any[] = [];
  cities: any[] = [];

  ngOnInit(): void {
    zip(this.http.get('/api/user/current'), this.http.get('/api/geo/province')).subscribe(([user, province]: any) => {
      this.userLoading = false;
      this.user = user;
      this.provinces = province;
      this.choProvince(user.geographic.province.key, false);
      this.cdr.detectChanges();
    });
  }

  choProvince(pid: string, cleanCity = true) {
    this.http.get(`/api/geo/${pid}`).subscribe((res: any) => {
      this.cities = res;
      if (cleanCity) this.user.geographic.city.key = '';
      this.cdr.detectChanges();
    });
  }

  // #endregion

  save() {
    this.msg.success(JSON.stringify(this.user));
    return false;
  }

}
