import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAssignmentComponent } from './create-new-assignment.component';

describe('CreateNewAssignmentComponent', () => {
  let component: CreateNewAssignmentComponent;
  let fixture: ComponentFixture<CreateNewAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
