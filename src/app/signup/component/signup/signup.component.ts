import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, FormsModule, MatInputModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  @Output() userInfo: EventEmitter<User> = new EventEmitter<User>();

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(6), Validators.required])
  })

  onSignup(): void {
    this.userInfo.emit({
      name: this.signupForm.value.name ? this.signupForm.value.name : undefined,
      email: this.signupForm.value.email ? this.signupForm.value.email : undefined,
      password: this.signupForm.value.password ? this.signupForm.value.password : undefined
    });
  }

}
