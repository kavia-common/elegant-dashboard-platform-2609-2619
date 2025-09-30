import { Component } from '@angular/core';
import { UiButtonComponent } from '../../projects/ui-kit/src/lib/atoms/ui-button/ui-button.component';
import { UiInputComponent } from '../../projects/ui-kit/src/lib/atoms/ui-input/ui-input.component';
import { UiIconComponent } from '../../projects/ui-kit/src/lib/atoms/ui-icon/ui-icon.component';
import { UiBadgeComponent } from '../../projects/ui-kit/src/lib/atoms/ui-badge/ui-badge.component';

@Component({
  selector: 'app-root',
  imports: [UiButtonComponent, UiInputComponent, UiIconComponent, UiBadgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Hello, angular';
}
