import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PromoCardComponent, type PromoCardItem } from '../promo-card/promo-card';

@Component({
  selector: 'app-promo-section',
  imports: [PromoCardComponent],
  templateUrl: './promo-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoSectionComponent {
  readonly cards = input<PromoCardItem[]>([]);
}
