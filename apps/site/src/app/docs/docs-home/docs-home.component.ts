import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

const docLibs = {
  guides: {
    title: "向导",
    uri: "/assets/json/docs-list.json"
  },
  components: {
    title: "组件",
    uri: "/assets/docs/libs/components/outline.json"
  }
}

@Component({
  selector: 'mls-docs-home',
  templateUrl: './docs-home.component.html',
  styleUrls: ['./docs-home.component.scss']
})
export class DocsHomeComponent implements OnInit {

  outline = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly http: HttpClient
  ) { }

  ngOnInit() {
    this.fetchLib();
  }

  private fetchLib() {
    this.route.params.subscribe((params) => {
      const { type } = params;
      const libInfo = docLibs[type];
      if (!libInfo) {
        return ;
      }
      
      this.http.get(libInfo.uri).subscribe(outline => {
        // this.outline = outline
        if (_.isArray(outline)) {
          this.outline = [{
            title: `${libInfo.title}`,
            cid: `${type}`,
            articles: outline.map(it => {
              const {name, uri} = it;
              return {
                title: `${name}`,
                id: `${name}`,
                articleUrl: `${uri}`
              };
            })
          }];
        } else {
          this.outline = outline['categories'];
        }
      });
    })
  }

}
