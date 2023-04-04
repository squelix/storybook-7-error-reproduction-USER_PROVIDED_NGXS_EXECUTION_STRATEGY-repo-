import { UrlCreationOptions } from '@angular/router';
import { action } from '@storybook/addon-actions';
import { of } from 'rxjs';

// From https://github.com/Jakob-em/storybook-addon-angular-router/blob/main/src/actionLoggingRouter.js

export class ActionLoggingRouter {
  readonly #activePath!: string;

  constructor(activePath: string) {
    this.#activePath = activePath;
  }

  get navigated() {
    return true;
  }

  get routerState() {
    return {};
  }

  get events() {
    return of(undefined);
  }

  get url() {
    return this.#activePath;
  }

  serializeUrl(tree: { commands: string[]; extras: UrlCreationOptions }) {
    return this.#joinCommands(tree);
  }

  createUrlTree(commands: string[], extras = {}) {
    return { commands, extras };
  }

  isActive(tree: { commands: string[]; extras: UrlCreationOptions }, extras: boolean) {
    if (!this.#activePath) {
      return false;
    }

    if (extras) {
      return this.#joinCommands(tree) === this.#activePath;
    }

    return this.#joinCommands(tree).startsWith(this.#activePath);
  }

  navigate(commands: string[], extras: UrlCreationOptions) {
    action('[router] navigate')({ commands, extras });
    return Promise.resolve(true);
  }

  navigateByUrl(url: string, extras: UrlCreationOptions) {
    action('[router] navigateByUrl')({ url, extras });
    return Promise.resolve(true);
  }

  readonly #joinCommands = (tree: { commands: string[]; extras: UrlCreationOptions }) => {
    const url = tree.commands.join('/');
    return url.startsWith('//') ? url.substring(1) : url;
  };
}
