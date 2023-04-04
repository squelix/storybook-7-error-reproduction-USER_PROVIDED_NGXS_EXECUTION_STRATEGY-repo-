#Accessibility guidelines

## To fix

Elements left to fix can be found on `FIXME` comments

## Make Actionable elements accessible

### Dont

Make icon clickable

```
  <tui-svg
      *ngIf="hasWidgetPanel"
      aria-label="Ouvrir l'encart de contenu secondaire"
      class="card__footer__icon-element-equal icon"
      [src]="LoyaltyIcons.ElementEqual"
      (click)="showSidePanel.emit()"
    ></tui-svg>
```

### Do

Button are made for clicks

```
 <button (click)="showSidePanel.emit()" aria-label="Ouvrir l'encart de contenu secondaire" class="card__footer__icon-element-equal">
      <tui-svg
        *ngIf="hasWidgetPanel"
        class="icon"
        [src]="LoyaltyIcons.ElementEqual"
        aria-hidden="true"
      ></tui-svg>
    </button>

```

Hide SVG (tui-svg)

```
    <tui-svg
        [src]="LoyaltyIcons.ElementEqual"
        aria-hidden="true"
    ></tui-svg>
```

Add `title` to buttons without text content

```
 <button title="Ouvrir l'encart de contenu secondaire">*</button>

```
