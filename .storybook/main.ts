import type { StorybookConfig } from '@storybook/angular';

const apiDomain = 'staging.k8s.wizbii.us';
const loyaltyPartnerApiPrefix = `https://loyalty-p-api`;

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-angular-router',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['./public'],
  env: (config) => ({
    ...config,
    account: `https://account.api.${apiDomain}`,
    job: `https://job-api.${apiDomain}`,
    permii: `https://permii.api.${apiDomain}`,
    suggestion: `https://suggestion.api.${apiDomain}`,
    place: `https://place.${apiDomain}`,
    imaginary: `https://imaginary.${apiDomain}`,
    content: `https://content-api.${apiDomain}`,
    contact: `https://contact.api.${apiDomain}`,
    googleStorage: `https://storage.googleapis.com`,
    fibii: `https://fibii.api.${apiDomain}`,
    loyaltyPartner: `${loyaltyPartnerApiPrefix}.${apiDomain}`,
    loyaltyPrefix: `${loyaltyPartnerApiPrefix}`,
    file: `https://file.${apiDomain}`,
    subscription: `https://subscription.api`,
    opsEvent: `https://ops-event.api.${apiDomain}`,
    stripeKey:
      'pk_test_51KyybyFW7mrizdEZkJFlCZuglgMwLnmvIX1IqC60GWfTltzHeiGM4SLfE22gEkl3jciRSRGmdO6K3fldMDOAqzgP00xhrdx56g',
  }),
  docs: {
    autodocs: true,
  },
};

export default config;
