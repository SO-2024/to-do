import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ReusableFunctionsService {

  durationInSeconds: number = 5;

  snackBar = inject(MatSnackBar);

  constructor() { }

  openSuccessSnackBar(): void {
    this.snackBar.open('Success!!', 'Dismiss', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  openErrorSnackBar(): void {
    this.snackBar.open('Error!!', 'Dismiss', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
