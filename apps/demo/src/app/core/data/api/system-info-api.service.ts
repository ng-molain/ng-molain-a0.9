import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type SystemInfo = any;

@Injectable({
  providedIn: 'root'
})
export class SystemInfoApiService {

  constructor(
    private http: HttpClient
  ) { }

  getSystemInfo(): Observable<SystemInfo> {
    return this.http.get(`/assets/tmp/app-data.json`);
  }
}
