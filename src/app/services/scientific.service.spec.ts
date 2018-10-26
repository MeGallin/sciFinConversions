import { TestBed } from '@angular/core/testing';

import { ScientificService } from './scientific.service';

describe('ScientificService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScientificService = TestBed.get(ScientificService);
    expect(service).toBeTruthy();
  });
});
