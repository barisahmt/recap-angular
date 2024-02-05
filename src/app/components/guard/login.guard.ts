import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';


export const loginGuard: CanActivateFn = (route, state) => {

  const auterSerice = inject(AuthService)
  const toastrService = inject(ToastrService)
  const router = inject(Router)
   if(auterSerice.isAuthenticated()){
    return true
   }
   else{
    toastrService.info("Please Login")
    router.navigate(["auth/login"])
    return false;
   }
};
