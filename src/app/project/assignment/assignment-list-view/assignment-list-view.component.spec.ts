import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentListViewComponent } from './assignment-list-view.component';

describe('AssignmentListViewComponent', () => {
  let component: AssignmentListViewComponent;
  let fixture: ComponentFixture<AssignmentListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
