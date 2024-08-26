import { LoginService } from './../../services/login.service';
import { Component, inject } from '@angular/core';
import { LoginComponent } from '../../component/login/login.component';
import { UserCreds } from '../../models/user-creds';
import { ReusableFunctionsService } from '../../../reusable-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

  loginService = inject(LoginService);
  route = inject(Router);
  reusableFunctionsService = inject(ReusableFunctionsService);

  onLogin(userCred: UserCreds): void {
    this.loginService.verifyUser(userCred).subscribe({
      next: (uservalid) => {
        if(uservalid && uservalid?.token) {
          sessionStorage.setItem('token', uservalid.token);
          this.route.navigate(['/home']);
        }
        this.reusableFunctionsService.openSuccessSnackBar();
      },
      error: (error) => {
        if (error) {
          this.reusableFunctionsService.openErrorSnackBar();
        }
      }
    });
  }

}
