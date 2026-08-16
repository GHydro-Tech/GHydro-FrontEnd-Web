import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';

// Configuração da paleta de cores customizada em Azul Oceano (GHydro)
const GHydroBluePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eef6ff',
      100: '#d9ebff',
      200: '#bcddff',
      300: '#8ec8ff',
      400: '#59a9ff',
      500: '#0284c7', // Cor principal
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#0a3c59',
      950: '#06263b'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      license: 'eyJpZCI6IjNkMTAxZTEzLWJlMmEtNDA1OS04YWE5LWM3Y2QwZjJmZDRhMSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODY5MTU0OTYsImV4cCI6MTgxODQ1MTQ5Nn0.00MDkfSXiyANgvXTZHkp0Vj3xruCa-3dI9cmTzB5JXEhwhOZZEhY5QnZMqz5E4hnGVewk55wBHnwxwqLCQEmBw',
      theme: {
        preset: GHydroBluePreset,
        options: {
          darkModeSelector: false,
          license: undefined as any // Desabilita a checagem de licença do PrimeUI
        }
      }
    })
  ]
};
