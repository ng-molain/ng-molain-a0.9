import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderStandardDemoComponent } from './page-header-standard-demo.component';

describe('PageHeaderStandardDemoComponent', () => {
  let component: PageHeaderStandardDemoComponent;
  let fixture: ComponentFixture<PageHeaderStandardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderStandardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderStandardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
