import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../models/todo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatDialogModule, ReactiveFormsModule, MatFormFieldModule, NgIf, FormsModule, MatInputModule, MatDatepickerModule, MatCheckboxModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent implements OnInit {

  title: string | undefined;
  btnTitle: string | undefined;
  isUpdate: boolean= false;
  task: Task | undefined;
  minDate = new Date();

  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef);

  addEditForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dueDate: new FormControl('', [Validators.required]),
    status: new FormControl(false, [Validators.required])
  })

  ngOnInit (): void {
    this.isUpdate = this.data.isUpdate;
    if(this.isUpdate) {
      this.title = 'Edit';
      this.btnTitle = 'Update';
      this.task = this.data.task;
      this.autoFillEditForm(this.data.task);
    } else {
      this.title = 'Add';
      this.btnTitle = 'Save';
    }
  }

  autoFillEditForm(todo: Task): void {
    if (todo) {
      this.addEditForm.get('title')?.patchValue(todo.title || '');
      this.addEditForm.get('description')?.patchValue(todo.description || '');
      this.addEditForm.get('dueDate')?.patchValue(todo.dueDate ? new Date(todo.dueDate).toISOString().substring(0, 10) : '');
      this.addEditForm.get('status')?.patchValue(todo.status || false);
    }
  }

  onAddOrUpdateTask(): void {
    const task = {
      title: this.addEditForm.get('title')?.value,
      description: this.addEditForm.get('description')?.value,
      dueDate: this.addEditForm.get('dueDate')?.value,
      status: this.addEditForm.get('status')?.value,
      ...( this. isUpdate ? { id: this.task?.id} : {})
    }
    this.dialogRef.close(task);
  }

}
