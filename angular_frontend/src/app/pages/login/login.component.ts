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
    <!-- Two-column layout: left visuals, right form. No overlap. -->
    <section class="login-wrapper">
      <div class="login-grid">
        <!-- Left visuals -->
        <div class="login-visuals" aria-hidden="true">
          <div class="blob blob-a"></div>
          <div class="blob blob-b"></div>
          <div class="blob blob-c"></div>
          <img class="hero" src="/figmaimages/figma_image_4_5.png" alt="" width="419" height="613" />
        </div>

        <!-- Right form -->
        <div class="login-form-wrap">
          <div class="login-card">
            <h1 class="title">Create your Free Account</h1>

            <ui-input variant="auth" placeholder="Enter your Full Name here"></ui-input>
            <ui-input variant="auth" placeholder="Enter your Email here"></ui-input>
            <ui-input variant="auth" placeholder="Enter your Password here"></ui-input>

            <ui-button variant="cta-yellow" size="lg" [fullWidth]="true">Create Account</ui-button>

            <div class="hint">Already have an account? Log in</div>

            <div class="or">- OR -</div>

            <div class="socials">
              <button type="button" class="social-btn">
                <span class="icon-placeholder"></span>
                <span class="text">Sign up with Google</span>
              </button>
              <button type="button" class="social-btn">
                <span class="icon-placeholder icon-github">
                  <ui-icon name="terminal" [size]="24"></ui-icon>
                </span>
                <span class="text">Sign up with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Wrapper ensures full-height and themed background; centers grid */
    .login-wrapper {
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #e6f3ff; /* matches design */
      overflow: hidden; /* prevent outer bleed */
    }

    /* Two equal-height columns with responsive minmax to avoid overlap */
    .login-grid {
      width: min(1200px, 96%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(360px, 1fr) minmax(420px, 1.1fr);
      gap: 24px;
      align-items: stretch;
      isolation: isolate; /* create stacking context to respect z-index */
    }

    /* Left visuals area: position relatives and clip to container */
    .login-visuals {
      position: relative;
      min-height: 720px;
      height: 100%;
      overflow: hidden; /* ensure nothing overflows into form column */
      border-radius: 16px;
    }
    .login-visuals .blob {
      position: absolute;
      border-radius: 40px;
      z-index: 1;
    }
    .login-visuals .blob-a { left: 24px; top: 143px; width: 526px; height: 661px; background: #f9ed32; }
    .login-visuals .blob-b { left: 103px; top: 79px; width: 530px; height: 607px; background: #f2d335; }
    .login-visuals .blob-c { left: 0; top: 488px; width: 550px; height: 469px; background: #d9bd32; }

    .login-visuals .hero {
      position: absolute;
      left: 47px;
      top: 190px;
      width: 419px;
      height: 613px;
      object-fit: cover;
      z-index: 2; /* above blobs but still clipped by visuals container */
      pointer-events: none;
      user-select: none;
    }

    /* Right form column - ensure it sits above left visuals and never gets overlapped */
    .login-form-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3; /* higher than any visuals to guarantee no overlap */
      min-width: 420px; /* safeguard for smaller widths */
    }

    .login-card {
      width: 100%;
      max-width: 845px;
      background: var(--color-fcfeff, #fcfeff);
      border-radius: var(--radius-20, 20px);
      box-shadow: var(--shadow-0, 0 4px 4px rgba(0,0,0,0.25));
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .title {
      font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
      font-size: 26px;
      line-height: 39px;
      font-weight: 600;
      color: #000;
      margin: 0;
      text-wrap: balance;
    }
    .hint {
      color: #000;
      font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
      text-align: center;
    }
    .or {
      margin-top: 8px;
      color: #b0bac3;
      font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
      font-size: 26px;
      line-height: 39px;
      font-weight: 500;
      text-align: center;
    }
    .socials {
      display: flex;
      gap: 20px;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    .social-btn {
      width: 220px;
      height: 55px;
      border: 1px solid #7c838a;
      border-radius: 15px;
      background: transparent;
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: flex-start;
      padding: 0 12px;
      cursor: pointer;
    }
    .icon-placeholder {
      width: 50px;
      height: 50px;
      background: #b0bac3;
      border-radius: 6px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .social-btn .text {
      font-family: var(--font-family-poppins, Poppins, Roboto, Arial, sans-serif);
      font-size: 14px;
      font-weight: 500;
      color: #7c838a;
    }

    /* Responsiveness: stack at <= 1024px and ensure form is never obstructed */
    @media (max-width: 1200px) {
      .login-grid {
        grid-template-columns: minmax(320px, 1fr) minmax(380px, 1fr);
      }
      .login-form-wrap { min-width: 380px; }
    }

    @media (max-width: 1024px) {
      .login-grid {
        grid-template-columns: 1fr; /* stack */
      }
      .login-visuals {
        min-height: 520px;
        border-radius: 16px;
      }
      .login-visuals .hero {
        left: 24px;
        top: 120px;
        width: 320px;
        height: 470px;
      }
      .login-form-wrap {
        z-index: 3;
      }
    }

    /* Small screens: ensure padding and readability */
    @media (max-width: 600px) {
      .login-card {
        padding: 24px 16px;
      }
      .social-btn {
        width: 100%;
        max-width: 320px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {}
