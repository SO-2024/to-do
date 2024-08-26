import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserCreds } from '../models/user-creds';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  baseURL: string = 'http://localhost:8080/usertodo/';

  http = inject(HttpClient)

  verifyUser(userCred: UserCreds): Observable<{message: string, token: string}> {
    return this.http.post<{message: string, token: string}>(`${this.baseURL}login`, userCred);
  }

  isAuthenticate(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
