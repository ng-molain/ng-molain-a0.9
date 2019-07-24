import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mls-docs-view',
  templateUrl: './docs-view.component.html',
  styleUrls: ['./docs-view.component.scss']
})
export class DocsViewComponent implements OnInit {

  articleUrl = "";

  constructor(
    private readonly route: ActivatedRoute,
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
        const url = `/assets/docs/guides/`
      }
    });
  }

}
