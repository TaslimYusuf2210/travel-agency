import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatingFieldComponent } from '../../../../shared/components/floating-field/floating-field';

@Component({
  selector: 'app-search-form',
  imports: [FormsModule, FloatingFieldComponent],
  templateUrl: './search-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  readonly activeTab = input<'flights' | 'stays'>('flights');
  readonly tabChange = output<'flights' | 'stays'>();

  readonly fromLocation = signal<string>('Lahore');
  readonly toLocation = signal<string>('Karachi');
  readonly tripType = signal<string>('Return');
  readonly departReturn = signal<string>('07 Nov 22 - 13 Nov 22');
  readonly passengerClass = signal<string>('1 Passenger, Economy');

  readonly showPromoInput = signal<boolean>(false);
  readonly promoCode = signal<string>('');
  readonly appliedPromo = signal<string | null>(null);

  setTab(tab: 'flights' | 'stays') {
    this.tabChange.emit(tab);
  }

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
