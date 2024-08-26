import { Component, inject, OnInit } from '@angular/core';
import { TodoComponent } from '../../component/todo/todo.component';
import { Task } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { ReusableFunctionsService } from '../../../reusable-functions.service';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss'
})
export class TodoContainerComponent implements OnInit {

  taskList: Task[] | undefined;

  todoService = inject(TodoService);
  reusableFunctionsService = inject(ReusableFunctionsService);

  ngOnInit (): void {
    this.getAllTask();
  }

  onAddOrUpdateTask(taskInfo: {task: Task, isUpdate: boolean}): void {
    if (taskInfo?.task) {
      if (taskInfo?.isUpdate) {
        this.onUpdateTask(taskInfo.task);
      } else {
        this.onAddTask(taskInfo.task);
      }
    }
  }

  getAllTask(): void {
    this.todoService.getAllTask().subscribe({
      next: (taskList) => {
        if(taskList?.length > 0) {
          this.taskList = taskList;
        }
      },
      error: (error) => {
        if (error) {
          this.reusableFunctionsService.openErrorSnackBar();
        }
      }
    });
  }

  getTaskByTitle(title: string): void {
    this.todoService.getTaskByTitle(title).subscribe({
      next: (taskList) => {
        if(taskList?.length > 0) {
          this.taskList = taskList;
        }
      },
      error: (error) => {
        if (error) {
          this.reusableFunctionsService.openErrorSnackBar();
        }
      }
    });
  }

  onAddTask(task: Task): void {
    if (task) {
      this.todoService.addTask(task).subscribe({
        next: (res) => {
          if(res) {
            this.getAllTask();
            this.reusableFunctionsService.openSuccessSnackBar();
          }
        },
        error: (error) => {
          if (error) {
            this.reusableFunctionsService.openErrorSnackBar();
          }
        }
      });
    }
  }

  onUpdateTask(task: Task): void {
    if (task) {
      this.todoService.updateTask(task).subscribe({
        next: (res) => {
          if(res) {
            this.getAllTask();
            this.reusableFunctionsService.openSuccessSnackBar();
          }
        },
        error: (error) => {
          if (error) {
            this.reusableFunctionsService.openErrorSnackBar();
          }
        }
      });
    }
  }

  onSearch(searchText: string): void {
    if(searchText) {
      this.getTaskByTitle(searchText);
    }
  }

  deleteTask(taskId: number): void {
    if (taskId) {
      this.todoService.deleteTask(taskId).subscribe({
        next: (res) => {
          if(res) {
            this.getAllTask();
            this.reusableFunctionsService.openSuccessSnackBar();
          }
        },
        error: (error) => {
          if (error) {
            this.reusableFunctionsService.openErrorSnackBar();
          }
        }
      });
    }
  }

}
