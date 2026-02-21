import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { TheMealNameComponent } from './the-meal-name.component';
import { TheMealService } from '../../services/the-meal.service';

describe('TheMealNameComponent', () => {
  let component: TheMealNameComponent;
  let fixture: ComponentFixture<TheMealNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheMealNameComponent],
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

    fixture = TestBed.createComponent(TheMealNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
