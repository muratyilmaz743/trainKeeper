import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  selector: 'train-recorder-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'train-recorder';
}
