import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthShell } from '../auth-shell/auth-shell';

type ForgetPasswordStep = 'email' | 'verify' | 'reset';

@Component({
  selector: 'app-forget-password',
  imports: [RouterLink, AuthShell],
  templateUrl: './forget-password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgetPassword {
  step = signal<ForgetPasswordStep>('email');

  setStep(step: ForgetPasswordStep) {
    this.step.set(step);
  }
}
