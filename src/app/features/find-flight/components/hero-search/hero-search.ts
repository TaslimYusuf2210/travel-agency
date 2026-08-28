import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-flight-hero-search',
  imports: [FormsModule],
  templateUrl: './hero-search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindFlightHeroSearchComponent {
  readonly fromLocation = signal('Lahore');
  readonly toLocation = signal('Karachi');
  readonly tripType = signal('Return');
  readonly departReturn = signal('07 Nov 22 - 13 Nov 22');
  readonly passengerClass = signal('1 Passenger, Economy');

  readonly showPromoInput = signal(false);
  readonly promoCode = signal('');
  readonly appliedPromo = signal<string | null>(null);

  swapLocations() {
    const temp = this.fromLocation();
    this.fromLocation.set(this.toLocation());
    this.toLocation.set(temp);
  }

  togglePromo() {
    this.showPromoInput.update((v) => !v);
  }

  applyPromo() {
    if (this.promoCode().trim()) {
      this.appliedPromo.set(this.promoCode().trim().toUpperCase());
      this.showPromoInput.set(false);
    }
  }
}
