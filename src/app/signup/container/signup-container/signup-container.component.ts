import { Component, inject } from '@angular/core';
import { SignupComponent } from '../../component/signup/signup.component';
import { User } from '../../models/user';
import { SignupService } from '../../services/signup.service';
import { ReusableFunctionsService } from '../../../reusable-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-container',
  standalone: true,
  imports: [SignupComponent],
  templateUrl: './signup-container.component.html',
  styleUrl: './signup-container.component.scss'
})
export class SignupContainerComponent {

  signupService = inject(SignupService);
  reusableFunctionsService = inject(ReusableFunctionsService);
  route = inject(Router);


  onSignup(userInfo: User): void {
    if (userInfo) {
      this.signupService.saveUser(userInfo).subscribe({
        next: (res) => {
          if (res) {
            // sessionStorage.setItem('token', uservalid.token);
            this.route.navigate(['/home']);
            this.reusableFunctionsService.openSuccessSnackBar();
          }
        },
        error: (error) => {
          if (error) {
            this.reusableFunctionsService.openErrorSnackBar();
          }
        }
      });
    }
  }

}
