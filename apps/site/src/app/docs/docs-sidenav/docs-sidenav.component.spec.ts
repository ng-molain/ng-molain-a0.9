import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsSidenavComponent } from './docs-sidenav.component';

describe('DocsSidenavComponent', () => {
  let component: DocsSidenavComponent;
  let fixture: ComponentFixture<DocsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
