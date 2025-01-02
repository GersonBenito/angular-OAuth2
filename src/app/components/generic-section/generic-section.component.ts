import { Component } from '@angular/core';
import { LoginSectionComponent } from '../login-section/login-section.component';

@Component({
  selector: 'app-generic-section',
  imports: [LoginSectionComponent],
  standalone: true,
  templateUrl: './generic-section.component.html',
  styleUrl: './generic-section.component.scss'
})
export class GenericSectionComponent {

}
