import { TestBed } from '@angular/core/testing';

import { PermessionsService } from './permessions.service';

describe('PermessionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermessionsService = TestBed.get(PermessionsService);
    expect(service).toBeTruthy();
  });
});
