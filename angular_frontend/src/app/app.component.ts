import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { ThemeTokenService } from '../../projects/ui-tokens/src/lib/theme-token.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  // PUBLIC_INTERFACE
  /** AppComponent is the application shell hosting the router outlet and basic navigation. */
  title = 'angular';

  private sub?: Subscription;
  themeLabel: 'emerald' | 'yellow' = 'emerald';

  constructor(private router: Router, private tokens: ThemeTokenService) {}

  ngOnInit(): void {
    // Switch theme based on route: login -> yellow, others -> emerald
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url || '';
        if (url.startsWith('/login')) {
          this.tokens.setTheme('yellow');
          this.themeLabel = 'yellow';
        } else {
          this.tokens.setTheme('emerald');
          this.themeLabel = 'emerald';
        }
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
