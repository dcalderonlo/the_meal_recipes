import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TheMealRandomComponent } from './the-meal-random.component';
import { TheMealService } from '../../services/the-meal.service';

describe('TheMealRandomComponent', () => {
  let component: TheMealRandomComponent;
  let fixture: ComponentFixture<TheMealRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealRandomComponent],
      providers: [
        {
          provide: TheMealService,
          useValue: {
            getMealRandom: () => of({ meals: [] })
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

    fixture = TestBed.createComponent(TheMealRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
