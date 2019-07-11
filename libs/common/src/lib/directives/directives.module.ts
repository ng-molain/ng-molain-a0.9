import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTemplateOutletDirective } from './string-template-outlet';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StringTemplateOutletDirective,
    ],
    exports: [
        StringTemplateOutletDirective,
    ],
})
export class NgMolainDirectivesModule { }
