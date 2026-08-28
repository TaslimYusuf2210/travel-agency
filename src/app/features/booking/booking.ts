import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  template: `
    <section class="p-8 text-[#112211]">
      <h1 class="font-display text-4xl">Booking</h1>
      <p class="mt-4 text-base text-gray-600">Plan your trip and complete your reservation.</p>
    </section>
  `,
})
export class Booking {}
