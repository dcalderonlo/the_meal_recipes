import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr({ 
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      tapToDismiss: true,
      closeButton: true
     }),
  ],
};
