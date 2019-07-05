import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContentDemoComponent } from './full-content-demo.component';

describe('FullContentDemoComponent', () => {
  let component: FullContentDemoComponent;
  let fixture: ComponentFixture<FullContentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
