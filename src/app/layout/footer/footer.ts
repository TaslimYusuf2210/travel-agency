import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  email = signal<string>('');
  subscribed = signal<boolean>(false);

  onSubscribe() {
    if (this.email().trim()) {
      this.subscribed.set(true);
    }
  }
}

