import { Routes } from '@angular/router';

export const findFlightRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./flightflow').then((m) => m.Flightflow),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        path: 'search',
        title: 'Search Flight',
        loadComponent: () =>
          import('./pages/flightsearch/flightsearch').then(
            (m) => m.Flightsearch,
          ),
      },
      {
        path: 'flightlisting',
        title: 'Show Flights',
        loadComponent: () =>
          import('./pages/flightlisting/flightlisting').then(
            (m) => m.Flightlisting,
          ),
      },
    ],
  },
];
