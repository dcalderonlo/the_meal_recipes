import { Component, inject, Input } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";
import { TheMealService } from '../../services/the-meal.service';
import { CardComponent } from "../card/card.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-the-meal-search',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './the-meal-search.component.html',
  styleUrl: './the-meal-search.component.css'
})
export class TheMealSearchComponent {
  private mealService = inject(TheMealService);
  private tostr = inject(ToastrService);

  @Input() searchType: 'name' | 'letter' = 'name';

  isVisisble: boolean = false;
  hasSearched: boolean= false;
  meals: any[] = [];

  getMeals(searchValue: string) {

    if (!searchValue || searchValue.trim() === '') {
      this.tostr.error('El campo de búsqueda no puede estar vacío.');
      return;
    }

    this.isVisisble = true;
    this.hasSearched = true;

    if (this.searchType === 'name') {
      this.mealService.getMealByName(searchValue).subscribe({
        next: (response) => {
          this.meals = response.meals || [];
          this.hasSearched = true;
          this.isVisisble = false;
        },
        error: (error) => {
          console.error(error);
          this.tostr.error(error.message);
          this.isVisisble = false;
        }
      });
    } else if (this.searchType === 'letter') {
      this.mealService.getMealByLetter(searchValue).subscribe({
        next: (response) => {
          this.meals = response.meals || [];
          this.hasSearched = true;
          this.isVisisble = false;
        },
        error: (error) => {
          console.error(error);
          this.tostr.error(error.message);
          this.isVisisble = false;
        }
      });
    }
  }

}
