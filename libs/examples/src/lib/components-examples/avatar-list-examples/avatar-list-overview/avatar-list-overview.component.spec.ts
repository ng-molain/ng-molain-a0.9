import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarListOverviewComponent } from './avatar-list-overview.component';

describe('AvatarListOverviewComponent', () => {
  let component: AvatarListOverviewComponent;
  let fixture: ComponentFixture<AvatarListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
