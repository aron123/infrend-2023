import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  refuseUnregistered(): boolean {
    if (localStorage.getItem('username')) {
      return true;
    }
    else {
      this.router.navigateByUrl('/welcome');
      return false;
    }
  }


  refuseRegistered(): boolean {
    if (localStorage.getItem('username')) {
      this.router.navigateByUrl('/');
      return false;
    }
    else {
      return true;
    }
  }
}
