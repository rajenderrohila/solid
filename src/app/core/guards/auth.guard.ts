import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export declare type CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(true) {
  }else {
    return router.navigateByUrl('/');
  }
  return true;
};
