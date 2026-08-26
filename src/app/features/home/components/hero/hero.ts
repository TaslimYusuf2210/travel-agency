import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly tabChange = output<'flights' | 'stays'>();
}
