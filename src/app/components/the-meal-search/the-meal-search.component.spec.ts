import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TheMealSearchComponent } from './the-meal-search.component';
import { TheMealService } from '../../services/the-meal.service';

describe('TheMealSearchComponent', () => {
  let component: TheMealSearchComponent;
  let fixture: ComponentFixture<TheMealSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealSearchComponent],
      providers: [
        {
          provide: TheMealService,
          useValue: {
            getMealByName: () => of({ meals: [] }),
            getMealByLetter: () => of({ meals: [] })
          }
        },
        {
          provide: ToastrService,
          useValue: {
            error: jasmine.createSpy('error')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheMealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
