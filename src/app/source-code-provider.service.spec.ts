import { TestBed, inject } from '@angular/core/testing';

import { SourceCodeProviderService } from './source-code-provider.service';

describe('SourceCodeProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceCodeProviderService]
    });
  });

  it('should be created', inject([SourceCodeProviderService], (service: SourceCodeProviderService) => {
    expect(service).toBeTruthy();
  }));
});
