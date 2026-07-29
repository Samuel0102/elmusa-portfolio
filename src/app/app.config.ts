import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import {provideTranslocoPersistLang} from "@jsverse/transloco-persist-lang";
import {provideTransloco} from "@jsverse/transloco";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimations(), provideHttpClient(),
    provideTransloco({
      loader: TranslocoHttpLoader,
      config: {
        availableLangs: ['en', 'pt'],
        defaultLang: 'pt',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
    }),
    provideTranslocoPersistLang({
      storage: { useValue: localStorage },
    })
  ]
};
