import { Routes } from '@angular/router';
import { StaticViewerComponent } from './static-viewer/static-viewer.component';

/**
 * PUBLIC_INTERFACE
 * routes
 * /** Application routes:
 * - /: Home landing with links
 * - /login: Shows the Figma Login static page (assets/loginpage-screen-2-2.html)
 * - /device-info: Shows the Device Info static page (assets/device-info-6-1037.html)
 */
export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'login', component: StaticViewerComponent, data: { file: '/assets/static/loginpage-screen-2-2.html' } },
  { path: 'device-info', component: StaticViewerComponent, data: { file: '/assets/static/device-info-6-1037.html' } },
  { path: '**', redirectTo: '' }
];
