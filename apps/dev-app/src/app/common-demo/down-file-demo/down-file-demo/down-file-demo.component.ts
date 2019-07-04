import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-down-file-demo',
  templateUrl: './down-file-demo.component.html',
  styleUrls: ['./down-file-demo.component.scss']
})
export class DownFileDemoComponent implements OnInit {

  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

}
