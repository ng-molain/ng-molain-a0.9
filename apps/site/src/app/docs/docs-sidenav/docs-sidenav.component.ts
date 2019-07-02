import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mls-docs-sidenav',
  templateUrl: './docs-sidenav.component.html',
  styleUrls: ['./docs-sidenav.component.scss']
})
export class DocsSidenavComponent implements OnInit {

  categories;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this._fetchDocList();
  }

  private _fetchDocList() {
    this._http.get("/assets/json/docs-list.json").subscribe(outline => {
      // console.log(outline);
      const { categories } = outline as any;
      this.categories = categories;
    })
  }

}
