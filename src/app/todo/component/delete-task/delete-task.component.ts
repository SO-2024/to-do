import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.scss'
})
export class DeleteTaskComponent {

  dialogRef = inject(MatDialogRef);

  onDelete(): void {
    this.dialogRef.close(true);
  }

}
