import { async, TestBed } from '@angular/core/testing';
import { NgMolainCommonModule } from './common.module';

describe('CommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMolainCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgMolainCommonModule).toBeDefined();
  });
});
