import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCreds } from '../../models/user-creds';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @Output() userCreds: EventEmitter<UserCreds> = new EventEmitter<UserCreds>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(6), Validators.required])
  })

  onLogin(): void {
    this.userCreds.emit({
      email: this.loginForm.value.email ? this.loginForm.value.email : undefined,
      password: this.loginForm.value.password ? this.loginForm.value.password : undefined
    });
  }

}
