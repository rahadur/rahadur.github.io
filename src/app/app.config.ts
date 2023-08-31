import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideSvgIcons } from '@ngneat/svg-icon';

import { routes } from './app.routes';
import { icons } from './icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideSvgIcons(icons)
  ]
};``
