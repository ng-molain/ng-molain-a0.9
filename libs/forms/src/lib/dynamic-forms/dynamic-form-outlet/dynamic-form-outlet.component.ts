import { Component, OnInit, Input, ViewChild, ViewContainerRef, OnChanges, ComponentRef } from '@angular/core';
import { FormFieldSchema } from '../typings';
import { TerminatorService, DynamicFormControl, DynamicFormControlFactory } from '../support';

@Component({
  selector: 'ml-dynamic-form-outlet',
  templateUrl: './dynamic-form-outlet.component.html',
  styleUrls: ['./dynamic-form-outlet.component.scss']
})
export class DynamicFormOutletComponent implements OnInit, OnChanges {

  @Input() field: FormFieldSchema;

  @ViewChild("target", {read: ViewContainerRef, static: false})
  viewContainerRef: ViewContainerRef;

  private _controlRef: ComponentRef<DynamicFormControl>;

  constructor(
    private readonly controlFactory: DynamicFormControlFactory,
    private readonly terminatorService: TerminatorService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    const ref = this._controlRef = this.controlFactory.createControl(this.viewContainerRef, this.field.type);

    // patch properties

    
  }
}
