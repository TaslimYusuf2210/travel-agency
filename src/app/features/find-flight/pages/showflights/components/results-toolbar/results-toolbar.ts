import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-showflights-results-toolbar',
  standalone: true,
  templateUrl: './results-toolbar.html',
  styleUrl: './results-toolbar.css',
})
export class ResultsToolbarComponent {
  @Input() resultCount = 0;
  @Input() selectedSort = 'Cheapest';
  @Input() sortOptions: string[] = [];

  @Output() sortChange = new EventEmitter<string>();

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortChange.emit(target.value);
  }
}
