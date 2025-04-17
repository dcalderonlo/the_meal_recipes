import { TestBed } from '@angular/core/testing';

import { TheMealService } from './the-meal.service';

describe('TheMealService', () => {
  let service: TheMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
