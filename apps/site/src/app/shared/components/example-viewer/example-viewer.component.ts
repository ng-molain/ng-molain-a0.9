import { Component, OnInit, Input } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { EXAMPLES } from '@ng-molain/examples';

@Component({
  selector: 'mls-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViewerComponent implements OnInit {

  selectedPortal: ComponentPortal<any>;

  @Input()
  get example() { return this._example; }
  set example(exampleName: string) {
    if (!exampleName || !EXAMPLES.find(it => it.selector === exampleName)) {
      // show error view
      console.error(`Could not find example: ${exampleName}`);
      return ;
    }

    this._example = exampleName;
    const exampleIntro = EXAMPLES.find(it => it.selector === exampleName);
    this.selectedPortal = new ComponentPortal(exampleIntro.component);
  }
  
  private _example: string;

  constructor() { }

  ngOnInit() {
  }

}
