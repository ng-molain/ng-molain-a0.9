import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable.directive';
import { DragHandleDirective } from './directives/drag-handle.directive';
import { DragPlaceholderWrapperDirective } from './directives/drag-placeholder-wrapper.directive';
import { DragPlaceholderDirective } from './directives/drag-placeholder.directive';
import { DragPreviewDirective } from './directives/drag-preview.directive';
import { DroppableDirective } from './directives/droppable.directive';
import { SortableDirective } from './directives/sortable.directive';
import { SortableItemDirective } from './directives/sortable-item.directive';
import { SplitterDirective } from './directives/splitter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DraggableDirective,
    DragHandleDirective,
    DragPlaceholderWrapperDirective,
    DragPlaceholderDirective,
    DragPreviewDirective,
    DroppableDirective,
    SortableDirective,
    SortableItemDirective,
    SplitterDirective,
  ],
  exports: [
    DraggableDirective,
    DragHandleDirective,
    DragPlaceholderWrapperDirective,
    DragPlaceholderDirective,
    DragPreviewDirective,
    DroppableDirective,
    SortableDirective,
    SortableItemDirective,
    SplitterDirective,
  ],
  providers: []
})
export class NgMolainDragDropModule { }
