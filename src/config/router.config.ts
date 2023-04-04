import type { ExtraOptions } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

export const routerConfig: ExtraOptions = {
  initialNavigation: 'enabledBlocking',
  onSameUrlNavigation: 'reload',
  paramsInheritanceStrategy: 'always',
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
  preloadingStrategy: QuicklinkStrategy,
  relativeLinkResolution: 'legacy',
};
