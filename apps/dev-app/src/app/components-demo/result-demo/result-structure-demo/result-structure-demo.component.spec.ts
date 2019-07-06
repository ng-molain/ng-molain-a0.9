import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStructureDemoComponent } from './result-structure-demo.component';

describe('ResultStructureDemoComponent', () => {
  let component: ResultStructureDemoComponent;
  let fixture: ComponentFixture<ResultStructureDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultStructureDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultStructureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
