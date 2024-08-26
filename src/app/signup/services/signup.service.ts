import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  baseURL: string = 'http://localhost:8080/usertodo/';

  http = inject(HttpClient);

  saveUser(user: User) {
    return this.http.post(`${this.baseURL}signup`, user);
  }

}
