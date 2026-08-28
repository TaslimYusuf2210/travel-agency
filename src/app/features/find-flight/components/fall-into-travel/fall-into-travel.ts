import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TravelTile {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-find-flight-fall-into-travel',
  templateUrl: './fall-into-travel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindFlightFallIntoTravelComponent {
  readonly tiles: TravelTile[] = [
    {
      title: 'Sri Lanka tea fields',
      imageUrl:
        'https://images.unsplash.com/photo-1505761671935-60e5b5f6a2d8?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Sri Lanka coastline',
      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Sri Lanka jungle resort',
      imageUrl:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Sri Lanka palm-lined villa',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    },
  ];
}
