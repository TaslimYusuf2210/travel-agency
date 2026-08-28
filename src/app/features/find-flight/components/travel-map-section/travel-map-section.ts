import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-find-flight-travel-map-section',
  imports: [NgOptimizedImage],
  templateUrl: './travel-map-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindFlightTravelMapSectionComponent {}
