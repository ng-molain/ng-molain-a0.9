import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

const docLibs = {
  guides: {
    title: "向导",
    uri: "/assets/docs/guides/outline.json"
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
      const libInfo = docLibs[type || 'guides'];
      if (!libInfo) {
        return ;
      }
      
      this.http.get(libInfo.uri).subscribe(outline => {
        // this.outline = outline
        if (type === 'components' && _.isArray(outline)) {
          this.outline = outline
        } else {
          this.outline = outline[0]['children'];
        }
      });
    })
  }

}
