import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTemplateDirective } from './item-template.directive';
import { HeaderTemplateDirective } from './header-template.directive';
import { BodyTemplateDirective } from './body-template.directive';
import { CellTemplateDirective } from './cell-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { FilterTemplateDirective } from './filter-template.directive';
import { GroupTemplateDirective } from './group-template.directive';
import { DetailTemplateDirective } from './detail-template.directive';
import { PageTemplateDirective } from './page-template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemTemplateDirective,
    HeaderTemplateDirective,
    BodyTemplateDirective,
    CellTemplateDirective,
    EditTemplateDirective,
    FooterTemplateDirective,
    FilterTemplateDirective,
    GroupTemplateDirective,
    DetailTemplateDirective,
    PageTemplateDirective,
  ],
  exports: [
    ItemTemplateDirective,
    HeaderTemplateDirective,
    BodyTemplateDirective,
    CellTemplateDirective,
    EditTemplateDirective,
    FooterTemplateDirective,
    FilterTemplateDirective,
    GroupTemplateDirective,
    DetailTemplateDirective,
    PageTemplateDirective,
  ]
})
export class TemplateBaseModule { }
