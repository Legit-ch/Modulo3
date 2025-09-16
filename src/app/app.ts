
import { Component, signal } from '@angular/core';
import { API_URL } from './api-url.token';
import { Logger, AdvancedLogger } from './logger';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: API_URL, useValue: 'http://localhost:3000/api' },
    { provide: AdvancedLogger, useClass: AdvancedLogger },
    { provide: Logger, useExisting: AdvancedLogger }
  ]
})
export class App {
  protected readonly title = signal('mi-app');
}
