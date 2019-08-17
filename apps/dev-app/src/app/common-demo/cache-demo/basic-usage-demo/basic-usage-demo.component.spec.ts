import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsageDemoComponent } from './basic-usage-demo.component';

describe('BasicUsageDemoComponent', () => {
  let component: BasicUsageDemoComponent;
  let fixture: ComponentFixture<BasicUsageDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUsageDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUsageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
