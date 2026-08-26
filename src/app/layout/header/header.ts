import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private router = inject(Router);

  private isStandaloneRoute(): boolean {
    const url = this.router.url;
    return (
      url.startsWith('/login') ||
      url.startsWith('/create-account') ||
      url.startsWith('/forgot-password')
    );
  }

  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  hideHeader = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.isStandaloneRoute()),
      startWith(this.isStandaloneRoute())
    )
  );

}

