import { async, TestBed } from '@angular/core/testing';
import { G2ChartsModule } from './g2-charts.module';

describe('G2ChartsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [G2ChartsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(G2ChartsModule).toBeDefined();
  });
});
