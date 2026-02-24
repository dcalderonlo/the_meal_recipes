import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { TheMealService } from './the-meal.service';

describe('TheMealService', () => {
  let service: TheMealService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(TheMealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
