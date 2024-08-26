import { TestBed } from '@angular/core/testing';

import { ReusableFunctionsService } from './reusable-functions.service';

describe('ReusableFunctionsService', () => {
  let service: ReusableFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReusableFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
