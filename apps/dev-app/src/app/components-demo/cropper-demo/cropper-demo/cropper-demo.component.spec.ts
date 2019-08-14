import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperDemoComponent } from './cropper-demo.component';

describe('CropperDemoComponent', () => {
  let component: CropperDemoComponent;
  let fixture: ComponentFixture<CropperDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
