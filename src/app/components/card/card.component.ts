import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  private sanitizer = inject(DomSanitizer);
  @Input() meals: any[] = [];

  getIngredientKeys(meal: any): string[] {
    return Object.keys(meal).filter(key => key.startsWith('strIngredient') && meal[key]);
  }

  safeYoutubeUrl(url: string): SafeResourceUrl {
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
