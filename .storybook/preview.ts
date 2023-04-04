import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/fr';
import { LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import '@angular/localize/init';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import {
  Preview,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { TUI_SANITIZER, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { TUI_FRENCH_LANGUAGE, TUI_LANGUAGE } from '@taiga-ui/i18n';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { of } from 'rxjs';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { inlineStories: true },
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    componentWrapperDecorator((story) => `<tui-root>${story}</tui-root>`),
    moduleMetadata({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgxsModule.forRoot([], {
          developmentMode: true,
          executionStrategy: NoopNgxsExecutionStrategy,
          compatibility: {
            strictContentSecurityPolicy: true,
          },
          selectorOptions: {
            suppressErrors: false,
            injectContainerState: true,
          },
        }),
        NgxsRouterPluginModule.forRoot(),
        ScrollToModule.forRoot(),
        ReactiveFormsModule,
        TuiRootModule,
        TuiDialogModule,
        NgxsReduxDevtoolsPluginModule.forRoot({
          name: 'Obendy Storybook',
          disabled: false,
        }),
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        { provide: LOCALE_ID, useValue: 'fr' },
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        {
          provide: TUI_LANGUAGE,
          useValue: of(TUI_FRENCH_LANGUAGE),
        },
        {
          provide: TUI_VALIDATION_ERRORS,
          useValue: {
            required: 'Ce champ est requis',
            email: 'Votre email est invalide',
            emailAlreadyExists: 'Cette adresse email est déjà utilisée',
          },
        },
      ],
    }),
  ],
};

export default preview;
