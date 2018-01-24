import { TestBed, inject } from '@angular/core/testing';

import { AssignmentService } from './assignment.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignmentService]
    });
  });

  it('should be created', inject([AssignmentService], (service: AssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
