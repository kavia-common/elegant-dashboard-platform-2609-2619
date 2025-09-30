import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'device-info',
    loadComponent: () => import('./pages/device-info/device-info.component').then(m => m.DeviceInfoComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
