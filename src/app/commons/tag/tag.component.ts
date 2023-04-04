import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Params, RouterModule } from '@angular/router';
import { TuiSvgModule } from '@taiga-ui/core';
import { TuiTagModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TuiTagModule, TuiSvgModule, RouterModule],
})
export class TagComponent {
  @Input() status!: any;
  @Input() text!: string;
  @Input() routerLink?: string[] | string;
  @Input() queryParams?: Params;
  @Input() icon?: any;
  @Input() size: 's' | 'm' | 'l' = 'm';

  readonly classNames: Record<string, string> = {
    primary: `loyalty-tag--primary`,
    primaryLight: `loyalty-tag--primaryLight`,
    secondary: `loyalty-tag--secondary`,
    secondaryLight: `loyalty-tag--secondaryLight`,
    success: `loyalty-tag--success`,
    successLight: `loyalty-tag--successLight`,
    warning: `loyalty-tag--warning`,
    warningLight: `loyalty-tag--warningLight`,
    danger: `loyalty-tag--danger`,
    dangerLight: `loyalty-tag--dangerLight`,
    info: `loyalty-tag--info`,
    infoLight: `loyalty-tag--infoLight`,
    dark: `loyalty-tag--dark`,
    darkLight: `loyalty-tag--darkLight`,
    light: `loyalty-tag--light`,
  };

  get className(): string {
    return this.classNames[this.status];
  }
}
