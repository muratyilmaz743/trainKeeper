import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'train-recorder-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'train-recorder';
}
