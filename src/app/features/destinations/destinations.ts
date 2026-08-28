import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  template: `
    <section class="p-8 text-[#112211]">
      <h1 class="font-display text-4xl">Destinations</h1>
      <p class="mt-4 text-base text-gray-600">Explore the world with our signature trips.</p>
    </section>
  `,
})
export class Destinations {}
