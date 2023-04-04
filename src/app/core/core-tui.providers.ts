import { TUI_SANITIZER } from '@taiga-ui/core';
import { TUI_FRENCH_LANGUAGE, TUI_LANGUAGE } from '@taiga-ui/i18n';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { of } from 'rxjs';

export const tuiProviders = [
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
      phone: 'Votre numéro de téléphone est invalide',
    },
  },
];
