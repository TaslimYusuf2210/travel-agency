import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface PromoCardItem {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel: string;
}

@Component({
  selector: 'app-promo-card',
  imports: [NgOptimizedImage],
  templateUrl: './promo-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoCardComponent {
  @Input() item!: PromoCardItem;
}
