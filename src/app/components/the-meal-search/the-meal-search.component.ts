import { Component, inject } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";
import { TheMealService } from '../../services/the-meal.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-the-meal-search',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './the-meal-search.component.html',
  styleUrl: './the-meal-search.component.css'
})
export class TheMealSearchComponent {
  private mealService = inject(TheMealService);

  isVisisble: boolean = false;
  hasSearched: boolean= false;
  meals: any[] = [];


  getMeals(letter: string) {
    this.isVisisble = true;

    // Llamada al servicio
    this.mealService.getMealByLetter(letter).subscribe({
      next: (respuesta) => {
        this.meals = respuesta.meals || [];
        this.hasSearched = true;
        this.isVisisble = false;
      },
      error: (error) => {
        this.isVisisble = false;
        this.hasSearched = false;

        if (error.message.includes('Debe ser de una única letra y no estar vacía')) {
            alert('Error de validación: \n' + error.message);
        } else {
            alert('Error al obtener los datos: \n' + error.message);
        }

        console.error('Detalle del error: \n', error);
      }
    });
  }

}
