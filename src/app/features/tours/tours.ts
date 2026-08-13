import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  template: `
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 class="text-3xl font-semibold tracking-tight text-neutral-900">Tours</h1>
      <p class="mt-3 text-neutral-600">
        Placeholder page — the real design comes from your screenshots.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tours {}
