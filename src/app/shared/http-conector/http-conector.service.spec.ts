import { TestBed } from '@angular/core/testing';

import { HttpConectorService } from './http-conector.service';

describe('HttpConectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpConectorService = TestBed.get(HttpConectorService);
    expect(service).toBeTruthy();
  });
});
