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
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
  }
}
