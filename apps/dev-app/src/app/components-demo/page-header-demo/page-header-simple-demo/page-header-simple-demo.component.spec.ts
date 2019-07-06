import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderSimpleDemoComponent } from './page-header-simple-demo.component';

describe('PageHeaderSimpleDemoComponent', () => {
  let component: PageHeaderSimpleDemoComponent;
  let fixture: ComponentFixture<PageHeaderSimpleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderSimpleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderSimpleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
