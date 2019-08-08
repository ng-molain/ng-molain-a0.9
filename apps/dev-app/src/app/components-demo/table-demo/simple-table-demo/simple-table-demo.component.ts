import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-simple-table-demo',
  templateUrl: './simple-table-demo.component.html',
  styleUrls: ['./simple-table-demo.component.scss']
})
export class SimpleTableDemoComponent implements OnInit {

  columns = [
    {field: 'name', showSort: true},
    {field: 'age', showSort: true},
    {field: 'sex', showSort: true, type: 'tag', tags: {
      male: {text: '先生', color: '#108ee9'},
      female: {text: '女士', color: 'magenta'},
    }},
    {field: 'badge', showSort: true, type: 'badge', badges: {
      success: {text: '成功', status: 'success'},
      error: {text: '失败', status: 'error'},
      default: {text: '默认', status: 'default'},
      processing: {text: '进行中', status: 'processing'},
      warning: {text: '警告', status: 'warning'},
    }},
    {field: 'address'},
    // {field: 'description'},
  ];

  dataList = [];

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    for (let i = 1; i <= 100; i++) {
      this.dataList.push({
        name: 'John Brown',
        age: `${i}2`,
        sex: ['male', 'female'][getRandomNumberByRange(0, 2)],
        badge: ['success', 'error', 'default', 'processing', 'warning'][getRandomNumberByRange(0, 5)],
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
  }
}

function getRandomNumberByRange(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}
