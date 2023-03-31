import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  constructor(private router: Router) { }

  refuseGuest(): boolean {
    const username = localStorage.getItem('username');

    if (username) {
      return true;
    } else {
      this.router.navigateByUrl('/welcome');
      return false;
    }
  }

  refuseUser(): boolean {
    const username = localStorage.getItem('username');

    if (username) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
}
