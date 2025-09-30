import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-button/ui-button.component';
import { UiInputComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-input/ui-input.component';
import { UiIconComponent } from '../../../../projects/ui-kit/src/lib/atoms/ui-icon/ui-icon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, UiInputComponent, UiIconComponent],
  template: `
    <!-- Two-column responsive layout: left = visuals only, right = form -->
    <section class="login-wrapper"
             style="min-height:100vh; display:grid; place-items:center; background:#e6f3ff;">
      <div class="login-grid"
           style="
             width: min(1200px, 96%);
             margin: 0 auto;
             display: grid;
             grid-template-columns: 1fr 1.4fr; /* Figma split approx 42% / 58% */
             gap: 24px;
             align-items: stretch;
           ">

        <!-- Left visuals column (images/blobs only) -->
        <div class="login-visuals"
             style="position: relative; min-height: 720px;">
          <!-- Blobs as background shapes -->
          <div aria-hidden="true"
               style="position:absolute; left:24px; top:143px; width:526px; height:661px; background:#f9ed32; border-radius:40px;"></div>
          <div aria-hidden="true"
               style="position:absolute; left:103px; top:79px; width:530px; height:607px; background:#f2d335; border-radius:40px;"></div>
          <div aria-hidden="true"
               style="position:absolute; left:0; top:488px; width:550px; height:469px; background:#d9bd32; border-radius:40px;"></div>

          <!-- Illustration image (served via /figmaimages/) -->
          <img src="/figmaimages/figma_image_4_5.png"
               alt=""
               width="419"
               height="613"
               style="position:absolute; left:47px; top:190px; width:419px; height:613px; object-fit:cover;" />
        </div>

        <!-- Right form column -->
        <div class="login-form-wrap"
             style="
               display: flex;
               align-items: center;
               justify-content: center;
             ">
          <div class="login-card"
               style="
                 width: 100%;
                 max-width: 845px;
                 background: var(--color-fcfeff, #fcfeff);
                 border-radius: var(--radius-20, 20px);
                 box-shadow: var(--shadow-0, 0 4px 4px rgba(0,0,0,0.25));
                 padding: 32px 24px;
                 display: flex;
                 flex-direction: column;
                 gap: 16px;
               ">
            <h1 style="
                  font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
                  font-size: 26px; line-height: 39px; font-weight: 600; color: #000; margin: 0;">
              Create your Free Account
            </h1>

            <!-- Inputs -->
            <ui-input variant="auth" placeholder="Enter your Full Name here"></ui-input>
            <ui-input variant="auth" placeholder="Enter your Email here"></ui-input>
            <ui-input variant="auth" placeholder="Enter your Password here"></ui-input>

            <!-- Primary CTA -->
            <ui-button variant="cta-yellow" size="lg" [fullWidth]="true">Create Account</ui-button>

            <!-- Hint -->
            <div style="
                  color:#000;
                  font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
                  text-align:center;">
              Already have an account? Log in
            </div>

            <!-- OR divider -->
            <div style="
                  margin-top:8px;
                  color:#b0bac3;
                  font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
                  font-size:26px; line-height:39px; font-weight:500; text-align:center;">
              - OR -
            </div>

            <!-- Social buttons -->
            <div style="display:flex; gap:20px; width:100%; justify-content:center; flex-wrap:wrap;">
              <button type="button"
                      style="
                        width:220px; height:55px; border:1px solid #7c838a; border-radius:15px; background:transparent;
                        display:flex; align-items:center; gap:12px; justify-content:flex-start; padding:0 12px;">
                <span style="width:50px; height:50px; background:#b0bac3; border-radius:6px; display:inline-block;"></span>
                <span style="font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
                             font-size:14px; font-weight:500; color:#7c838a;">Sign up with Google</span>
              </button>
              <button type="button"
                      style="
                        width:220px; height:55px; border:1px solid #7c838a; border-radius:15px; background:transparent;
                        display:flex; align-items:center; gap:12px; justify-content:flex-start; padding:0 12px;">
                <span style="
                      width:50px; height:50px; background:#b0bac3; border-radius:6px;
                      display:inline-flex; align-items:center; justify-content:center;">
                  <ui-icon name="terminal" [size]="24"></ui-icon>
                </span>
                <span style="font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
                             font-size:14px; font-weight:500; color:#7c838a;">Sign up with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Responsive adjustments -->
      <style>
        @media (max-width: 1024px) {
          .login-grid {
            grid-template-columns: 1fr; /* Stack: visuals on top, form below */
          }
          .login-visuals {
            min-height: 520px;
          }
          .login-visuals img {
            left: 24px !important;
            top: 120px !important;
            width: 320px !important;
            height: 470px !important;
          }
        }
      </style>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {}
