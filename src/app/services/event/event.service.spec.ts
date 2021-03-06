import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: EventService = TestBed.get(EventService);
    expect(service).toBeTruthy();
  });
});
