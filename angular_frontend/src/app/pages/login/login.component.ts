import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../../projects/ui-kit/src/lib/atoms/ui-button/ui-button.component';
import { UiInputComponent } from '../../../projects/ui-kit/src/lib/atoms/ui-input/ui-input.component';
import { UiIconComponent } from '../../../projects/ui-kit/src/lib/atoms/ui-icon/ui-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, UiInputComponent, UiIconComponent],
  template: `
    <section style="min-height:100vh; display:grid; place-items:center; background:#e6f3ff;">
      <div style="width:min(720px, 92%); display:flex; flex-direction:column; gap:20px; align-items:center;">
        <h1 style="font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif); font-size:26px; line-height:39px; font-weight:600; color:#000; margin-bottom:8px;">
          Create your Free Account
        </h1>

        <ui-input variant="auth" placeholder="Enter your Full Name here" style="width:100%"></ui-input>
        <ui-input variant="auth" placeholder="Enter your Email here" style="width:100%"></ui-input>
        <ui-input variant="auth" placeholder="Enter your Password here" style="width:100%"></ui-input>

        <ui-button variant="cta-yellow" size="lg" [fullWidth]="true">Create Account</ui-button>

        <div style="color:#000; font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);">
          Already have an account? Log in
        </div>

        <div style="margin-top:8px; color:#b0bac3; font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif); font-size:26px; line-height:39px; font-weight:500;">
          - OR -
        </div>

        <div style="display:flex; gap:20px; width:100%; justify-content:center; flex-wrap:wrap;">
          <button type="button" style="width:220px; height:55px; border:1px solid #7c838a; border-radius:15px; background:transparent; display:flex; align-items:center; gap:12px; justify-content:flex-start; padding:0 12px;">
            <span style="width:50px; height:50px; background:#b0bac3; border-radius:6px; display:inline-block;"></span>
            <span style="font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif); font-size:14px; font-weight:500; color:#7c838a;">Sign up with Google</span>
          </button>
          <button type="button" style="width:220px; height:55px; border:1px solid #7c838a; border-radius:15px; background:transparent; display:flex; align-items:center; gap:12px; justify-content:flex-start; padding:0 12px;">
            <span style="width:50px; height:50px; background:#b0bac3; border-radius:6px; display:inline-flex; align-items:center; justify-content:center;">
              <ui-icon name="terminal" [size]="24"></ui-icon>
            </span>
            <span style="font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif); font-size:14px; font-weight:500; color:#7c838a;">Sign up with GitHub</span>
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {}
