import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './http-interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    httpInterceptorProviders,
    provideAnimations(),
    provideHttpClient(
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi(),
      withFetch()
    ),
    httpInterceptorProviders,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};