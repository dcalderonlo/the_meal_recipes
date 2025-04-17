import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheMealService {

  private readonly _http = inject(HttpClient);
  private readonly _API_URL = 'https://www.themealdb.com/api/json/v1/1/';

  getMealByName(name: string): Observable<any> {
    if (!name || name.trim() === '') {
      return throwError(() => new Error('La búsqueda no puede estar vacía'));
    }
    const sanitizedName = encodeURIComponent(name.trim());
    return this._http.get<any>(`${this._API_URL}search.php?s=${sanitizedName}`);
  }

  getMealByLetter(letter: string): Observable<any> {
    if (!letter || letter.trim() === '' || letter.length > 1) {
      return throwError(() => new Error('La búsqueda debe contener una sola letra'));
    }
    const sanitizedLetter = encodeURIComponent(letter.trim());
    return this._http.get<any>(`${this._API_URL}search.php?f=${sanitizedLetter}`);
  }

  getMealRandom(): Observable<any> {
    return this._http.get<any>(`${this._API_URL}random.php`);
  }
  
}
