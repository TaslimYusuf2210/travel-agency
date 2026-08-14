import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private router = inject(Router);

  private isStandaloneRoute(): boolean {
    const url = this.router.url;
    return (
      url === '/' ||
      url === '' ||
      url.startsWith('/login') ||
      url.startsWith('/create-account') ||
      url.startsWith('/forgot-password')
    );
  }

  hideHeader = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.isStandaloneRoute()),
      startWith(this.isStandaloneRoute())
    )
  );

}

