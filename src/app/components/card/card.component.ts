import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Meal } from '../../models/meal.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  private sanitizer = inject(DomSanitizer);
  @Input() public meals: Meal[] = [];

  public get validMeals(): Meal[] {
    return (this.meals || []).filter(
      (meal) =>
        meal &&
        meal.idMeal &&
        meal.strMeal &&
        meal.strInstructions &&
        meal.strMealThumb
    );
  }

  public getIngredientKeys(meal: Meal): string[] {
    return Object.keys(meal).filter(key => key.startsWith('strIngredient') && meal[key]);
  }

  public safeYoutubeUrl(url: string): SafeResourceUrl {
    if (url) {
      // Extrae el ID del video de la URL de YouTube
      const videoId = url.split('v=')[1];
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
    }
    return ''; // O alguna URL por defecto si no se encuentra o es inválida
  }

}
