import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { TheMealService } from '../../services/the-meal.service';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-the-meal-random',
  imports: [CardComponent, LoaderComponent],
  templateUrl: './the-meal-random.component.html',
  styleUrl: './the-meal-random.component.css'
})
export class TheMealRandomComponent implements OnInit {
  private mealService = inject(TheMealService);

  isVisisble: boolean = false;
  meals: any[] = [];

  ngOnInit() {
    this.isVisisble = true;

    this.mealService.getMealRandom().subscribe({
      next: (response) => {
        this.meals = response.meals || [];
        this.isVisisble = false;
      },
      error: (error) => {
        console.error(error);
        alert(error.message);
        this.isVisisble = false;
      }
    });
  }
  
}
