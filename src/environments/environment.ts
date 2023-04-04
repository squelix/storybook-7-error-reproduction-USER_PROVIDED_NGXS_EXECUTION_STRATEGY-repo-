/* eslint-disable */
import { buildConfig } from './build-config';

const packageJsonVersionAtBuild = require('../../package.json').version; // eslint-disable-line

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const production: boolean = buildConfig === 'production';

export const environment = {
  version: packageJsonVersionAtBuild,
  production,
};

if (!production) {
  import('zone.js/dist/zone-error' as any); // Included with Angular CLI.
}
