import { Routes } from '@angular/router';

export const routes: Routes = [
  // Pages
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./components/menu/menu.component').then(m => m.MenuComponent)
  },
  {
    path: 'name',
    loadComponent: () => import('./components/the-meal-name/the-meal-name.component').then(m => m.TheMealNameComponent)
  },
  {
    path: 'letter',
    loadComponent: () => import('./components/the-meal-letter/the-meal-letter.component').then(m => m.TheMealLetterComponent)
  },
  {
    path: 'random',
    loadComponent: () => import('./components/the-meal-random/the-meal-random.component').then(m => m.TheMealRandomComponent)
  },
  // 404 page
  {
    path: '**',
    loadComponent: () => import('./components/pagenotfound/pagenotfound.component').then(m => m.PagenotfoundComponent)
  },
];
