import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flightlisting-filter-sidebar',
  standalone: true,
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.css',
})
export class FilterSidebarComponent {
  @Input() title = 'Filters';
  @Input() priceRange = '$300 - $1,200';
  @Input() stopOptions: string[] = ['Non-stop', '1 stop', '2+ stops'];
  @Input() airlineOptions: string[] = [
    'Emirates',
    'Qatar Airways',
    'Air Arabia',
    'Fly Dubai',
    'Etihad Airways',
  ];
  @Input() timeOptions: string[] = ['Morning', 'Afternoon', 'Evening', 'Night'];
}
