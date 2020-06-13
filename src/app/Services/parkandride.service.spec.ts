import { TestBed } from '@angular/core/testing';

import { ParkandrideService } from './parkandride.service';

describe('ParkandrideService', () => {
  let service: ParkandrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkandrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
