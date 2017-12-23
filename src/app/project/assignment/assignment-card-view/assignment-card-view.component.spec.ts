import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCardViewComponent } from './assignment-card-view.component';

describe('AssignmentCardViewComponent', () => {
  let component: AssignmentCardViewComponent;
  let fixture: ComponentFixture<AssignmentCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
