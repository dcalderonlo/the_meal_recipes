import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TheMealLetterComponent } from './the-meal-letter.component';
import { TheMealService } from '../../services/the-meal.service';

describe('TheMealLetterComponent', () => {
  let component: TheMealLetterComponent;
  let fixture: ComponentFixture<TheMealLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealLetterComponent],
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

    fixture = TestBed.createComponent(TheMealLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
