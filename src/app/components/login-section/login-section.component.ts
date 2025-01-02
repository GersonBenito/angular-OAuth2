import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputType } from '../../enum/input-type';
import { ButtonComponent } from '../button/button.component';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-login-section',
  imports: [CommonModule, ButtonComponent, SocialMediaComponent],
  standalone: true,
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.scss'
})
export class LoginSectionComponent {

  public type: InputType.password | InputType.text = InputType.password;
  public password: string = InputType.password;

  changeVisible(){
    this.type = this.type === InputType.password ? InputType.text : InputType.password;
  }
}
