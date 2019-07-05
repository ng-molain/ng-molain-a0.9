import { async, TestBed } from '@angular/core/testing';
import { NgMolainComponentsModule } from './components.module';

describe('ComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMolainComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgMolainComponentsModule).toBeDefined();
  });
});
