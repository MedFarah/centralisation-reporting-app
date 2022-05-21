import { TestBed } from '@angular/core/testing';

import { RapportRejetService } from './rapport-rejet.service';

describe('RapportRejetService', () => {
  let service: RapportRejetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapportRejetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
