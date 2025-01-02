import { Component, Input } from '@angular/core';
import { InputType } from '../../enum/input-type';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() public label: string = '';
  @Input() public actionButton: InputType.button | InputType.submit = InputType.button;
  @Input() public icon: string = '';
  @Input() public type: string = '';
}
