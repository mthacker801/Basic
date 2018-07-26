import { TestBed, inject } from '@angular/core/testing';

import { DblistService } from './dblist.service';

describe('DblistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DblistService]
    });
  });

  it('should be created', inject([DblistService], (service: DblistService) => {
    expect(service).toBeTruthy();
  }));
});
