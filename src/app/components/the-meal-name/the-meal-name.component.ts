import { Component, inject } from '@angular/core';
import { TheMealService } from '../../services/the-meal.service';
import { TheMealSearchComponent } from "../the-meal-search/the-meal-search.component";

@Component({
  selector: 'app-the-meal-name',
  imports: [TheMealSearchComponent],
  templateUrl: './the-meal-name.component.html',
  styleUrl: './the-meal-name.component.css'
})
export class TheMealNameComponent {
  private mealService = inject(TheMealService);

  isVisisble: boolean = false;
  hasSearched: boolean= false;
  meals: any[] = [];


  getMeals(letter: string) {
    this.isVisisble = true;
    this.mealService.getMealByLetter(letter).subscribe({
      next: (respuesta) => {
      this.meals = respuesta.meals || [];
      this.hasSearched = true;
      this.isVisisble= false;
    },
    error: (error) => {
      console.error('Error al obtener los datos: ', error);
      this.isVisisble = false;
      this.hasSearched = false;
      alert('Busqueda no válida');
    }
  });
 }

}
