import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderDemoComponent } from './page-header-demo.component';

describe('PageHeaderDemoComponent', () => {
  let component: PageHeaderDemoComponent;
  let fixture: ComponentFixture<PageHeaderDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
