import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarListDemoComponent } from './avatar-list-demo.component';

describe('AvatarListDemoComponent', () => {
  let component: AvatarListDemoComponent;
  let fixture: ComponentFixture<AvatarListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
