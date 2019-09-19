import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './directives/draggable.directive';
import { DragDropService } from './drag-drop.service';
import { DragHandleDirective } from './directives/drag-handle.directive';
import { DragPlaceholderDirective } from './directives/drag-placeholder.directive';
import { DragPreviewDirective } from './directives/drag-preview.directive';
import { DroppableDirective } from './directives/droppable.directive';
import { SortableDirective } from './directives/sortable.directive';
import { SortableItemDirective } from './directives/sortable-item.directive';
import { SplitterDirective } from './directives/splitter.directive';
import { DragPlaceholderWrapperDirective } from './directives/drag-placeholder-wrapper.directive';
import { ResizableComponent } from './directives/resizable.component';
import { ResizableDirective } from './directives/resizable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DraggableDirective,
    DragHandleDirective,
    DragPlaceholderDirective,
    DragPreviewDirective,
    DroppableDirective,
    SortableDirective,
    SortableItemDirective,
    SplitterDirective,
    DragPlaceholderWrapperDirective,
    ResizableComponent,
    ResizableDirective,
  ],
  exports: [
    DraggableDirective,
    DragHandleDirective,
    DragPlaceholderDirective,
    DragPreviewDirective,
    DroppableDirective,
    SortableDirective,
    SortableItemDirective,
    SplitterDirective,
    DragPlaceholderWrapperDirective,
    ResizableDirective,
  ],
  providers: [
    DragDropService,
  ],
  entryComponents: [
    ResizableComponent
  ]
})
export class NgMolainDragDropModule { }
