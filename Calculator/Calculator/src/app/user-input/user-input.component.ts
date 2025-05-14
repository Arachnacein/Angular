import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';


  onSubmit() {
    console.log('SUBMITTED');
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredDuration);
    console.log('SUBMITTED');
  }
}
