import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  DestinationCardComponent,
  type DestinationCardItem,
} from '../destination-card/destination-card';

@Component({
  selector: 'app-destinations-section',
  imports: [DestinationCardComponent],
  templateUrl: './destinations-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationsSectionComponent {
  readonly destinations = input<DestinationCardItem[]>([]);
}
