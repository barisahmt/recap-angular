import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


export const loginGuard: CanActivateFn = (route, state) => {

  const auterService = inject(AuthService)
  const toastrService = inject(ToastrService)
  const router = inject(Router)
   if(auterService.isAuthenticated()){
    auterService.authentication.set(true)
    return true
   }
   else{
    auterService.authentication.set(false)
    toastrService.info("Please Login")
    return false;
   }
};
