import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { TheMealService } from '../../services/the-meal.service';
import { LoaderComponent } from "../loader/loader.component";
import { ToastrService } from 'ngx-toastr';
import { Meal } from '../../models/meal.interface';

@Component({
  selector: 'app-the-meal-random',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './the-meal-random.component.html',
  styleUrl: './the-meal-random.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheMealRandomComponent implements OnInit {
  private mealService = inject(TheMealService);
  private toastr = inject(ToastrService);
  private cdr = inject(ChangeDetectorRef);

  public isVisisble = false;
  public meals: Meal[] = [];

  public ngOnInit(): void {
    this.isVisisble = true;
    this.cdr.markForCheck();

    this.mealService.getMealRandom().subscribe({
      next: (response) => {
        this.meals = response.meals || [];
        this.isVisisble = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error(error);
        this.toastr.error(error.message);
        this.isVisisble = false;
        this.cdr.markForCheck();
      }
    });
  }
  
}
