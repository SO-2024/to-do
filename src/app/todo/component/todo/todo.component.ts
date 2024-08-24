import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatDialogModule, AddEditComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todoList : Todo[] = [
    {
      id: 1,
      title: 'one',
      description: 'complete UI',
      dueDate: '02-04-2024',
      isCompleted: 'No'
    },
    {
      id: 2,
      title: 'Two',
      description: 'complete UI',
      dueDate: '02-04-2024',
      isCompleted: 'No'
    },
    {
      id: 3,
      title: 'Three',
      description: 'complete UI',
      dueDate: '02-04-2024',
      isCompleted: 'No'
    },
    {
      id: 4,
      title: 'Four',
      description: 'complete UI',
      dueDate: '02-04-2024',
      isCompleted: 'No'
    }
  ]

  constructor(
    private dialogBox: MatDialog,
  ) { }

  ngOninit () { }

  openAddEditPopup(todo: Todo, isEdit: boolean = false) : void {
    const dialog = this.dialogBox.open(AddEditComponent, {
      panelClass: 'AddEditPanelClass',
      height: 'auto',
      data: {...todo, isEdit}
    });
  }

}
