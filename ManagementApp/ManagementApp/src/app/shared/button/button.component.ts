import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 title = input.required<string>();
 icon = input<string>();
}
