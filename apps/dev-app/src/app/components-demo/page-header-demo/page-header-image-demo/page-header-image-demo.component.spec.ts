import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderImageDemoComponent } from './page-header-image-demo.component';

describe('PageHeaderImageDemoComponent', () => {
  let component: PageHeaderImageDemoComponent;
  let fixture: ComponentFixture<PageHeaderImageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderImageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderImageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
