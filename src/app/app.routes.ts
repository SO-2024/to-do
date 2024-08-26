import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
    },
    {
        path: 'home', //screen name only home
        // canActivate: [authGuard],
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) //path todo
    },
    {
        path: '**', //only once
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }

];
