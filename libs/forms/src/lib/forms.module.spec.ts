import { async, TestBed } from '@angular/core/testing';
import { MlFormsModule } from './forms.module';

describe('FormsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MlFormsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MlFormsModule).toBeDefined();
  });
});
