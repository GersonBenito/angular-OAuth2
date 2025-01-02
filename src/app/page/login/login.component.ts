import { Component } from '@angular/core';
import { BackgroundImageComponent } from '../../components/background-image/background-image.component';
import { GenericSectionComponent } from '../../components/generic-section/generic-section.component';

@Component({
  selector: 'app-login',
  imports: [BackgroundImageComponent, GenericSectionComponent],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
