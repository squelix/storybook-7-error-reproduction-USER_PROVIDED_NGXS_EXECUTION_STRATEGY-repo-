import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagComponent } from '@commons/tag/tag.component';

@Component({
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './homepage-test.component.html',
  styleUrls: ['./homepage-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageTestComponent {}
