import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TheMealService } from './the-meal.service';

describe('TheMealService', () => {
  let service: TheMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TheMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
