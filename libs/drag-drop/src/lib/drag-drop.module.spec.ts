import { async, TestBed } from '@angular/core/testing';
import { DragDropModule } from './drag-drop.module';

describe('DragDropModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DragDropModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DragDropModule).toBeDefined();
  });
});
