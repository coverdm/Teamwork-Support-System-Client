import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreatorComponent } from './profile-creator.component';

describe('ProfileCreatorComponent', () => {
  let component: ProfileCreatorComponent;
  let fixture: ComponentFixture<ProfileCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
