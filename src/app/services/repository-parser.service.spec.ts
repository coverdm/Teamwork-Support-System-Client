import { TestBed, inject } from '@angular/core/testing';

import { RepositoryParserService } from './repository-parser.service';

describe('RepositoryParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoryParserService]
    });
  });

  it('should be created', inject([RepositoryParserService], (service: RepositoryParserService) => {
    expect(service).toBeTruthy();
  }));
});
