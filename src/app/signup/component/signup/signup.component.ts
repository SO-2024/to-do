import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm = new FormGroup({

    name: new FormControl('', [Validators.required]),
    email: new FormControl('',  [Validators.email, Validators.required]), //pre-defined , '' for default value
    password: new FormControl('',[Validators.minLength(8), Validators.maxLength(8), Validators.required]
    )
  })

  onSubmit ()
  {
    console.log("name", this.signupForm.value.name);
  }

}
