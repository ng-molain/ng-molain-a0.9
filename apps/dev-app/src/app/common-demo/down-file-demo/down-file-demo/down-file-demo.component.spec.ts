import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownFileDemoComponent } from './down-file-demo.component';

describe('DownFileDemoComponent', () => {
  let component: DownFileDemoComponent;
  let fixture: ComponentFixture<DownFileDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownFileDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownFileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
