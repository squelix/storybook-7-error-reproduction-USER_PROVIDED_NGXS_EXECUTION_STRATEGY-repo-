/* eslint-disable no-console */
// Fix node
(window as any).global = window;

// https://github.com/algolia/algoliasearch-client-javascript/issues/691
(window as any).process = {
  env: { DEBUG: undefined },
};

// Define unknown CSS properties used in Angular animations
['flex', 'flexDirection', 'willChange'].forEach((prop) => {
  // Test if the property can be configured
  try {
    Object.defineProperty(document.body.style, prop, {
      enumerable: true,
      configurable: true,
    });
  } catch (e) {
    console.error(`Property '${prop}' cannot be configured.`);
  }
});
// Fix IE11
if (!Element.prototype.matches) {
  Element.prototype.matches = (Element.prototype as any).msMatchesSelector;
}
