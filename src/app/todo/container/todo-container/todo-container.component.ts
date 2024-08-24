import { Component } from '@angular/core';
import { TodoComponent } from '../../component/todo/todo.component';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss'
})
export class TodoContainerComponent {

}
