import { Routes } from '@angular/router';
import { Shell } from './layout/shell';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        title: 'Travel Agency',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'destinations',
        title: 'Destinations',
        loadComponent: () =>
          import('./features/destinations/destinations').then((m) => m.Destinations),
      },
      {
        path: 'tours',
        title: 'Tours',
        loadComponent: () => import('./features/tours/tours').then((m) => m.Tours),
      },
      {
        path: 'booking',
        title: 'Booking',
        loadComponent: () => import('./features/booking/booking').then((m) => m.Booking),
      },
      {
        path: 'account',
        title: 'Account',
        loadComponent: () => import('./features/account/account').then((m) => m.Account),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
