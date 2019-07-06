import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderStructureDemoComponent } from './page-header-structure-demo.component';

describe('PageHeaderStructureDemoComponent', () => {
  let component: PageHeaderStructureDemoComponent;
  let fixture: ComponentFixture<PageHeaderStructureDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderStructureDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderStructureDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
