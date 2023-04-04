import { environment } from '@environment';
import type { NgxsModuleOptions } from '@ngxs/store';
import { NoopNgxsExecutionStrategy } from '@ngxs/store';

export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  executionStrategy: NoopNgxsExecutionStrategy,
  compatibility: {
    strictContentSecurityPolicy: true,
  },
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: true,
  },
};
