import { Component, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Data, RouterLink } from '@angular/router';

/**
 * PUBLIC_INTERFACE
 * StaticViewerComponent
 * /** This component displays a static HTML page from the assets folder inside an iframe.
 * Route data:
 *  - file: string (relative path under /assets or any served path)
 * Example route config:
 *  { path: 'login', component: StaticViewerComponent, data: { file: '/assets/loginpage-screen-2-2.html' } }
 */
@Component({
  selector: 'app-static-viewer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="viewer-shell">
      <div class="viewer-header">
        <a routerLink="/" class="home-link">Home</a>
        <div class="spacer"></div>
        <span class="path">{{ filePath() }}</span>
      </div>
      <iframe
        *ngIf="safeUrl()"
        [src]="safeUrl()"
        class="viewer-frame"
        title="Static Screen Preview"
        referrerpolicy="no-referrer"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      ></iframe>
      <div *ngIf="!safeUrl()" class="viewer-empty">
        File not specified.
      </div>
    </div>
  `,
  styles: [`
    .viewer-shell { display: flex; flex-direction: column; height: 100vh; width: 100%; }
    .viewer-header {
      display: flex; align-items: center; gap: 12px;
      padding: 10px 16px; border-bottom: 1px solid #e5e7eb; background: #ffffff;
      font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    }
    .home-link { color: #2563EB; text-decoration: none; font-weight: 600; }
    .home-link:hover { text-decoration: underline; }
    .spacer { flex: 1; }
    .path { color: #6b7280; font-size: 12px; }
    .viewer-frame { flex: 1; width: 100%; border: 0; background: #f9fafb; }
    .viewer-empty { padding: 24px; color: #ef4444; }
  `]
})
export class StaticViewerComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  private fileSig = signal<string>('');
  private safeUrlSig = signal<SafeResourceUrl | null>(null);

  /** PUBLIC_INTERFACE */
  filePath = this.fileSig.asReadonly;
  /** PUBLIC_INTERFACE */
  safeUrl = this.safeUrlSig.asReadonly;

  ngOnInit(): void {
    const data: Data = this.route.snapshot.data ?? {};
    const file = (data['file'] as string) || '';
    this.fileSig.set(file);

    if (file) {
      // Sanitize as resource URL for iframe src
      this.safeUrlSig.set(this.sanitizer.bypassSecurityTrustResourceUrl(file));
    } else {
      this.safeUrlSig.set(null);
    }
  }

  ngOnDestroy(): void {
    // no-op
  }
}
