import { TestBed } from '@angular/core/testing';

import { VerysimplesliderService } from './verysimpleslider.service';

describe('VerysimplesliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerysimplesliderService = TestBed.get(VerysimplesliderService);
    expect(service).toBeTruthy();
  });
});
