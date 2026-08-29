import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FloatingFieldComponent } from '../../../../shared/components/floating-field/floating-field';

@Component({
  selector: 'app-flightsearch',
  imports: [FormsModule, NgOptimizedImage, RouterLink, FloatingFieldComponent],
  templateUrl: './flightsearch.html',
  styleUrl: './flightsearch.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Flightsearch {
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
