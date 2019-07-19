import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsBasicDemoComponent } from './forms-basic-demo/forms-basic-demo.component';
import { FormsCompactDemoComponent } from './forms-compact-demo/forms-compact-demo.component';
import { FormsComplexDemoComponent } from './forms-complex-demo/forms-complex-demo.component';
import { FormsHorizontalDemoComponent } from './forms-horizontal-demo/forms-horizontal-demo.component';
import { FormsInlineDemoComponent } from './forms-inline-demo/forms-inline-demo.component';
import { FormsLineDemoComponent } from './forms-line-demo/forms-line-demo.component';
import { FormsReactiveDemoComponent } from './forms-reactive-demo/forms-reactive-demo.component';
import { FormsVerticalDemoComponent } from './forms-vertical-demo/forms-vertical-demo.component';

const routes: Routes = [
  {
    path: '', component: FormsDemoComponent, children: [
      { path: 'basic', component: FormsBasicDemoComponent },
      { path: 'compact', component: FormsCompactDemoComponent },
      { path: 'complex', component: FormsComplexDemoComponent },
      { path: 'horizontal', component: FormsHorizontalDemoComponent },
      { path: 'inline', component: FormsInlineDemoComponent },
      { path: 'line', component: FormsLineDemoComponent },
      { path: 'reactive', component: FormsReactiveDemoComponent },
      { path: 'vertical', component: FormsVerticalDemoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDemoRoutingModule { }
