import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MealResponse } from '../models/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class TheMealService {

  private readonly _http = inject(HttpClient);
  private readonly apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  public getMealByName(name: string): Observable<MealResponse> {
    if (!name || name.trim() === '') {
      return throwError(() => new Error('La búsqueda no puede estar vacía'));
    }
    const sanitizedName = encodeURIComponent(name.trim());
    return this._http.get<MealResponse>(`${this.apiUrl}search.php?s=${sanitizedName}`);
  }

  public getMealByLetter(letter: string): Observable<MealResponse> {
    if (!letter || letter.trim() === '' || letter.length > 1) {
      return throwError(() => new Error('La búsqueda debe contener una sola letra'));
    }
    const sanitizedLetter = encodeURIComponent(letter.trim());
    return this._http.get<MealResponse>(`${this.apiUrl}search.php?f=${sanitizedLetter}`);
  }

  public getMealRandom(): Observable<MealResponse> {
    return this._http.get<MealResponse>(`${this.apiUrl}random.php`);
  }
  
}
