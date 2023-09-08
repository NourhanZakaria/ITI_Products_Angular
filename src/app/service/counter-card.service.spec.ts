import { TestBed } from '@angular/core/testing';

import { CounterCardService } from './counter-card.service';

describe('CounterCardService', () => {
  let service: CounterCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
