import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-datagrid-demo',
  templateUrl: './datagrid-demo.component.html',
  styleUrls: ['./datagrid-demo.component.scss']
})
export class DatagridDemoComponent implements OnInit {
  demos = [
    {routerLink: 'basic', name: 'Basic'},
    {routerLink: 'basic', name: 'Column Group'},
    {routerLink: 'basic', name: 'Frozen Group'},
    {routerLink: 'basic', name: 'Frozen Group - Advanced'},
    {routerLink: 'basic', name: 'Column Resizing'},
    {routerLink: 'basic', name: 'Virtual Scroll'},
    {routerLink: 'basic', name: 'Virtual Scroll - Lazy Load'},
    {routerLink: 'basic', name: 'DataGrid Sorting'},
    {routerLink: 'basic', name: 'Multiple Sorting'},
    {routerLink: 'basic', name: 'Pagination'},
    {routerLink: 'basic', name: 'Pagination - Lazy Load'},
    {routerLink: 'basic', name: 'Pagination Layout'},
    {routerLink: 'basic', name: 'Template'},
    {routerLink: 'basic', name: 'Filtering'},
    {routerLink: 'basic', name: 'Row Number'},
    {routerLink: 'basic', name: 'Row Group'},
    {routerLink: 'basic', name: 'Row Detail'},
    {routerLink: 'basic', name: 'Row Editing'},
    {routerLink: 'basic', name: 'Cell Editing'},
    {routerLink: 'basic', name: 'Dialog Editing'},
    {routerLink: 'basic', name: 'Footer Rows'},
    {routerLink: 'basic', name: 'DataGrid Styling'},
    {routerLink: 'basic', name: 'DataGrid Selection'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
