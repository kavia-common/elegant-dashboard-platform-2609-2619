import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

/**
 * PUBLIC_INTERFACE
 * AppComponent
 * /** Root shell component that hosts navigation and routed views. */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** PUBLIC_INTERFACE */
  title = 'Elegant Dashboard Preview';
}
