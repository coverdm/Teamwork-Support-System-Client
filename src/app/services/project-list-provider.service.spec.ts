import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './project-list-provider.service';

describe('ProjectListProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectService) => {
    expect(service).toBeTruthy();
  }));
});
