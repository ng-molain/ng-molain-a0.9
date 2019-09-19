import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableDemoComponent } from './resizable-demo.component';

describe('ResizableDemoComponent', () => {
  let component: ResizableDemoComponent;
  let fixture: ComponentFixture<ResizableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
