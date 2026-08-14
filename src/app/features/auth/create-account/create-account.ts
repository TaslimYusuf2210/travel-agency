import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthShell } from '../auth-shell/auth-shell';

type CreateAccountStep = 'signup' | 'payment';

@Component({
  selector: 'app-create-account',
  imports: [RouterLink, AuthShell],
  templateUrl: './create-account.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAccount {
  step = signal<CreateAccountStep>('signup');

  setStep(step: CreateAccountStep) {
    this.step.set(step);
  }
}
