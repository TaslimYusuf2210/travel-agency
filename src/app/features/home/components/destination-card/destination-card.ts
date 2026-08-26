import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

export interface DestinationCardItem {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-destination-card',
  imports: [NgOptimizedImage],
  templateUrl: './destination-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationCardComponent {
  @Input() destination!: DestinationCardItem;
}
