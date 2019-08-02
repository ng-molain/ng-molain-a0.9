import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mls-docs-view',
  templateUrl: './docs-view.component.html',
  styleUrls: ['./docs-view.component.scss']
})
export class DocsViewComponent implements OnInit {

  private _guideItems;
  articleUrl = "";

  constructor(
    private readonly route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this._fetchArticle();
  }

  private _fetchArticle() {
    this.route.params.subscribe(params => {
      const {type, slogan} = params;
      // console.log(type, slogan);
      // TODO: change to factory
      if (type === 'components') {
        const url = `/assets/docs/libs/components/${slogan}/${slogan}.adoc`;
        this.articleUrl = url;
      } else {
        // const url = `/assets/docs/guides/`
        if (this._guideItems) {
          const url = this.articleUrl = this._guideItems.find(it => it.id === slogan).sourceUrl;
        } else {
          this.http.get('/assets/docs/guides/items.json').subscribe(items => {
            this._guideItems = items;
            const url = this.articleUrl = this._guideItems.find(it => it.id === slogan).sourceUrl;
          })
        }
      }
    });
  }

}
