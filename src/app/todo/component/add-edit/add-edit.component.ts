import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss'
})
export class AddEditComponent {

  title: string | undefined;
  isEdit: boolean= false;
  task: Todo | undefined;

  addEditForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]), //pre-defined , '' for default value
    dueDate: new FormControl('', [Validators.required]),
    isCompleted: new FormControl('', [Validators.required]
    )
  })

  constructor(
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = data.isEdit;
    this.title =  this.isEdit ? 'Edit' : 'Add';
    this.addEditForm.get()
  }

  ngOninit () { 
    this.title =  this.isEdit ? 'Edit' : 'Add';
  }

  onAddEdit() {
    console.log("title", this.addEditForm.value.title);
  }

}
