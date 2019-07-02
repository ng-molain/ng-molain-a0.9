import { async, TestBed } from '@angular/core/testing';
import { ExamplesModule } from './examples.module';

describe('ExamplesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ExamplesModule).toBeDefined();
  });
});
