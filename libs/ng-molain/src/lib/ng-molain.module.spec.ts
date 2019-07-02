import { async, TestBed } from '@angular/core/testing';
import { NgMolainModule } from './ng-molain.module';

describe('NgMolainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgMolainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgMolainModule).toBeDefined();
  });
});
