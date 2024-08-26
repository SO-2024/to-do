import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Task } from '../../models/todo';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  @Input() taskList: Task[] | undefined;

  @Output() searchText: EventEmitter<string> = new EventEmitter<string>();
  @Output() taskId: EventEmitter<number> = new EventEmitter<number>();
  @Output() addOrUpdatetask: EventEmitter<{ task: Task, isUpdate: boolean }> = new EventEmitter<{ task: Task, isUpdate: boolean }>();

  dialogBox = inject(MatDialog);

  searchForm = new FormGroup({
    searchInput: new FormControl('', [Validators.minLength(3)])
  })

  openAddEditPopup(task?: Task, isUpdate: boolean = false) : void {
    const taskInfo = {task, isUpdate};
    const dialog = this.dialogBox.open(AddEditComponent, {
      panelClass: 'AddEditPanelClass',
      height: '60vh',
      data: taskInfo
    });
    dialog.afterClosed().subscribe((task) => {
      if (task) {
        this.addOrUpdatetask.emit({task, isUpdate})
      }
    });
  }

  openDeletePopup(task: Task) : void {
    const dialog = this.dialogBox.open(DeleteTaskComponent);
    dialog.afterClosed().subscribe((isDelete) => {
      if(isDelete) {
        this.taskId.emit(task.id);
      }
    });
  }

  getTaskByTitle(): void {
    const searchText = this.searchForm.get('searchInput')?.value;
    this.searchText.emit(searchText || '');
    console.log(searchText);
  }

}
