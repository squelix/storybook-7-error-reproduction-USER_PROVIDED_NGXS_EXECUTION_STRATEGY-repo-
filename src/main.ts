/* eslint-disable no-console */
import '@angular/common/locales/global/fr';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CoreModule } from '@core/core.module';
import { environment } from '@environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(CoreModule)
  .catch((err) => console.error(err));
