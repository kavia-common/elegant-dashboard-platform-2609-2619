import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * PUBLIC_INTERFACE
 * HomeComponent
 * /** Minimal landing page with links to the Figma-based static screens for preview. */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home">
      <h1>Angular Preview</h1>
      <p>Select a screen to preview:</p>
      <nav>
        <a routerLink="/login">Login Screen</a>
        <a routerLink="/device-info">Device Info Screen</a>
      </nav>
      <p class="hint">Static screens are rendered via iframe from the assets folder.</p>
    </div>
  `,
  styles: [`
    .home {
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #f9fafb;
      color: #111827;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
      padding: 24px;
    }
    h1 { font-weight: 600; margin-bottom: 8px; }
    p { margin: 6px 0; }
    nav { display: flex; gap: 16px; margin-top: 12px; }
    a {
      color: #2563EB; text-decoration: none; font-weight: 600;
      padding: 8px 12px; border-radius: 8px; background: white; border: 1px solid #e5e7eb;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    a:hover { background: #f3f4f6; }
    .hint { color: #6b7280; font-size: 12px; }
  `]
})
export class HomeComponent {}
