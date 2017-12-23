import { TestBed, inject } from '@angular/core/testing';

import { WorkersFinderService } from './workers-finder.service';

describe('WorkersFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkersFinderService]
    });
  });

  it('should be created', inject([WorkersFinderService], (service: WorkersFinderService) => {
    expect(service).toBeTruthy();
  }));
});
