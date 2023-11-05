import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../services/user-authen.service';
import { inject } from '@angular/core';

export const userGuardGuard: CanActivateFn = (route, state) => {
const userservice= inject(UserAuthenService);
const router=inject(Router);
if(userservice.isuserlogin){
  return true;
}
else{
  alert("you must login first");
  router.navigate(['/Userlogin']);
  return false;
}


};
