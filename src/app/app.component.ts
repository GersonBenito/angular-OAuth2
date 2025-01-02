import { Component } from '@angular/core';
import { LoginComponent } from './page/login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-OAuth2';
}
