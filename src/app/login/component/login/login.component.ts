import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]
    ), //pre-defined , '' for default value
    password: new FormControl('', [Validators.minLength(8), Validators.maxLength(8), Validators.required]
    )
  })

  onSubmit(): void {
    console.log("email:", this.loginForm.value.email)
    console.log("password:", this.loginForm.value.password)
  }

}
