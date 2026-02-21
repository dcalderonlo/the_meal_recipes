import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";
import { TheMealService } from '../../services/the-meal.service';
import { CardComponent } from "../card/card.component";
import { ToastrService } from 'ngx-toastr';
import { Meal } from '../../models/meal.interface';

@Component({
  selector: 'app-the-meal-search',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './the-meal-search.component.html',
  styleUrl: './the-meal-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheMealSearchComponent {
  private mealService = inject(TheMealService);
  private tostr = inject(ToastrService);
  private cdr = inject(ChangeDetectorRef);

  @Input() public searchType: 'name' | 'letter' = 'name';

  public isVisisble = false;
  public hasSearched = false;
  public meals: Meal[] = [];

  public getMeals(searchValue: string): void {

    if (!searchValue || searchValue.trim() === '') {
      this.tostr.error('El campo de búsqueda no puede estar vacío.');
      return;
    }

    this.isVisisble = true;
    this.hasSearched = true;
    this.cdr.markForCheck();

    if (this.searchType === 'name') {
      this.mealService.getMealByName(searchValue).subscribe({
        next: (response) => {
          this.meals = response.meals || [];
          this.hasSearched = true;
          this.isVisisble = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error(error);
          this.tostr.error(error.message);
          this.isVisisble = false;
          this.cdr.markForCheck();
        }
      });
    } else if (this.searchType === 'letter') {
      this.mealService.getMealByLetter(searchValue).subscribe({
        next: (response) => {
          this.meals = response.meals || [];
          this.hasSearched = true;
          this.isVisisble = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          console.error(error);
          this.tostr.error(error.message);
          this.isVisisble = false;
          this.cdr.markForCheck();
        }
      });
    }
  }

}
