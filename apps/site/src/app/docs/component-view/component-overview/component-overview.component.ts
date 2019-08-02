import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'mls-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.scss']
})
export class ComponentOverviewComponent implements OnInit, OnDestroy {
  articleUrl = "";

  private _destroyed = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
  ) {
    combineLatest(route.parent.params, route.parent.parent.params).pipe(
      map((p: [Params, Params]) => ({slogan: p[0]['slogan'], type: p[1]['type']})),
      takeUntil(this._destroyed)
    ).subscribe(params => {
      const {type, slogan} = params;
      // console.log(type, slogan);
      // TODO: change to factory
      if (type === 'components') {
        const url = `/assets/docs/libs/components/${slogan}/${slogan}.adoc`;
        this.articleUrl = url;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

}
