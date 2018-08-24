import { TestBed, inject } from '@angular/core/testing';

import { NgExampleLibraryService } from './ng-example-library.service';

describe('NgExampleLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgExampleLibraryService]
    });
  });

  it('should be created', inject([NgExampleLibraryService], (service: NgExampleLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
