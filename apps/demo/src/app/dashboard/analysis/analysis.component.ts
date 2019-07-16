import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';
import { deepCopy, yuan, getTimeDistance } from '@ng-molain/common';
import { I18nService } from '../../core/i18n/i18n-registor';

@Component({
  selector: 'demo-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) {}
  data: any = {};
  loading = true;
  date_range: Date[] = [];
  rankingListData: any[] = Array(7)
    .fill({})
    .map((item, i) => {
      return {
        // title: this.i18n.fanyi('app.analysis.test', { no: i }),
        title: `工专路 ${i} 号店`,
        total: 323234,
      };
    });
  titleMap = {
    // y1: this.i18n.fanyi('app.analysis.traffic'),
    // y2: this.i18n.fanyi('app.analysis.payments'),
    y1: '线上热门搜索',
    y2: '销售额类别占比',
  };
  // searchColumn: STColumn[] = [
  //   { title: '排名', i18n: 'app.analysis.table.rank', index: 'index' },
  //   {
  //     title: '搜索关键词',
  //     i18n: 'app.analysis.table.search-keyword',
  //     index: 'keyword',
  //     click: (item: any) => this.msg.success(item.keyword),
  //   },
  //   {
  //     type: 'number',
  //     title: '用户数',
  //     i18n: 'app.analysis.table.users',
  //     index: 'count',
  //     sorter: (a, b) => a.count - b.count,
  //   },
  //   {
  //     type: 'number',
  //     title: '周涨幅',
  //     i18n: 'app.analysis.table.weekly-range',
  //     index: 'range',
  //     render: 'range',
  //     sorter: (a, b) => a.range - b.range,
  //   },
  // ];

  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;

  saleTabs: any[] = [{ key: 'sales', show: true }, { key: 'visits' }];

  offlineIdx = 0;

  ngOnInit() {
    this.http.get('/api/charts').subscribe((res: any) => {
      res.offlineData.forEach((item: any, idx: number) => {
        item.show = idx === 0;
        item.chart = deepCopy(res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }

  setDate(type: any) {
    this.date_range = getTimeDistance(type);
    setTimeout(() => this.cdr.detectChanges());
  }
  changeSaleType() {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
        ? this.data.salesTypeDataOnline
        : this.data.salesTypeDataOffline;
    if (this.salesPieData) {
      this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
    }
    this.cdr.detectChanges();
  }

  handlePieValueFormat(value: any) {
    return yuan(value);
  }
  salesChange(idx: number) {
    if (this.saleTabs[idx].show !== true) {
      this.saleTabs[idx].show = true;
      this.cdr.detectChanges();
    }
  }
  offlineChange(idx: number) {
    if (this.data.offlineData[idx].show !== true) {
      this.data.offlineData[idx].show = true;
      this.cdr.detectChanges();
    }
  }

}
