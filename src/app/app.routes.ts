import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';

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
        path: 'find-flight',
        title: 'Find Flight',
        loadComponent: () =>
          import('./features/find-flight/find-flight').then((m) => m.FindFlight),
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
      },
      {
        path: 'create-account',
        title: 'Create Account',
        loadComponent: () => import('./features/auth/create-account/create-account').then((m) => m.CreateAccount),
      },
      {
        path: 'forgot-password',
        title: 'Forgot Password',
        loadComponent: () => import('./features/auth/forget-password/forget-password').then((m) => m.ForgetPassword),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
