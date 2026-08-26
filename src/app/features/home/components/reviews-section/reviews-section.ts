import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  ReviewCardComponent,
  type ReviewCardItem,
} from '../review-card/review-card';

@Component({
  selector: 'app-reviews-section',
  imports: [ReviewCardComponent],
  templateUrl: './reviews-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsSectionComponent {
  readonly reviews = input<ReviewCardItem[]>([]);
}
