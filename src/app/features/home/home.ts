import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  activeTab = signal<'flights' | 'stays'>('flights');

  fromLocation = signal<string>('Lahore');
  toLocation = signal<string>('Karachi');
  tripType = signal<string>('Return');
  departReturn = signal<string>('07 Nov 22 - 13 Nov 22');
  passengerClass = signal<string>('1 Passenger, Economy');

  showPromoInput = signal<boolean>(false);
  promoCode = signal<string>('');
  appliedPromo = signal<string | null>(null);

  swapLocations() {
    const temp = this.fromLocation();
    this.fromLocation.set(this.toLocation());
    this.toLocation.set(temp);
  }

  setTab(tab: 'flights' | 'stays') {
    this.activeTab.set(tab);
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

