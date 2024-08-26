import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginservice = inject(LoginService);
  const router = inject(Router);
  if (!loginservice.isAuthenticate()) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
