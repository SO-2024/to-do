import { Component } from '@angular/core';
import { SignupComponent } from '../../component/signup/signup.component';

@Component({
  selector: 'app-signup-container',
  standalone: true,
  imports: [SignupComponent],
  templateUrl: './signup-container.component.html',
  styleUrl: './signup-container.component.scss'
})
export class SignupContainerComponent {

}
