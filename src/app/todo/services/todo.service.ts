import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  baseURL: string = 'http://localhost:8080/todoapi/';

  http = inject(HttpClient);

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}getAllToDoList`);
  }

  getTaskByTitle(title: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}search?key=${title}`);
  }

  addTask(task: Task) {
    return this.http.post(`${this.baseURL}saveToDo`, task);
  }

  updateTask(task: Task) {
    return this.http.put(`${this.baseURL}updateToDo/${task.id}`, task); 
  }

  deleteTask(taskId: number) {
    return this.http.delete(`${this.baseURL}deleteToDo/${taskId}`);
  }

}
