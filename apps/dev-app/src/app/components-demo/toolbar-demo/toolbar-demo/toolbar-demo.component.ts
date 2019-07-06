import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'dev-toolbar-demo',
  templateUrl: './toolbar-demo.component.html',
  styleUrls: ['./toolbar-demo.component.scss']
})
export class ToolbarDemoComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [ null, Validators.required ]
    });
  }

  get name() { return this.form.controls.name; }

  ngOnInit(): void {
    this.name.markAsDirty();
  }
}
