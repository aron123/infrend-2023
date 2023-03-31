import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  username = '';

  constructor(private router: Router) {}

  saveUsername() {
    localStorage.setItem('username', this.username);
    this.router.navigateByUrl('/');
  }
}
