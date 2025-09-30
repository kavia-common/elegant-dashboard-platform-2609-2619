import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import atoms directly from the workspace library sources
import { UiButtonComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-button/ui-button.component';
import { UiIconComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-icon/ui-icon.component';
import { UiBadgeComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-badge/ui-badge.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, UiIconComponent, UiBadgeComponent],
  template: `
    <div style="padding:24px; display:flex; flex-direction:column; gap:20px;">
      <header style="display:flex; align-items:center; justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:12px;">
          <ui-icon name="dashboard" [size]="24" color="var(--color-0d9488)"></ui-icon>
          <h2 style="font:600 20px/28px var(--font-family-inter, Inter, Arial, sans-serif); margin:0; color: var(--color-374151);">Dashboard</h2>
          <ui-badge>ONLINE</ui-badge>
        </div>
        <div style="display:flex; gap:8px;">
          <ui-button variant="ghost" size="sm">Settings</ui-button>
          <ui-button variant="primary" size="sm">New Widget</ui-button>
        </div>
      </header>

      <section style="display:grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap:16px;">
        <div style="background:var(--color-ffffff); border-radius:var(--radius-8); box-shadow: var(--shadow-1), var(--shadow-2); padding:16px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <ui-icon name="visibility" [size]="24" color="var(--color-0d9488)"></ui-icon>
            <div style="font:600 16px/24px var(--font-family-inter); color:var(--color-374151);">Views</div>
          </div>
          <div style="font:700 20px/28px var(--font-family-inter); color:var(--color-0d9488);">7,265</div>
        </div>

        <div style="background:var(--color-ffffff); border-radius:var(--radius-8); box-shadow: var(--shadow-1), var(--shadow-2); padding:16px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <ui-icon name="group" [size]="24" color="var(--color-374151)"></ui-icon>
            <div style="font:600 16px/24px var(--font-family-inter); color:var(--color-374151);">Active Users</div>
          </div>
          <div style="font:700 20px/28px var(--font-family-inter); color:var(--color-1f2937);">2,318</div>
        </div>

        <div style="background:var(--color-ffffff); border-radius:var(--radius-8); box-shadow: var(--shadow-1), var(--shadow-2); padding:16px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <ui-icon name="person_add" [size]="24" color="var(--color-14b8a6)"></ui-icon>
            <div style="font:600 16px/24px var(--font-family-inter); color:var(--color-374151);">New Users</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="font:700 20px/28px var(--font-family-inter); color:var(--color-1f2937);">156</div>
            <ui-badge kind="status-default">+15.03%</ui-badge>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {}
