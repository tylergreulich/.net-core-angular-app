import { Component, OnInit } from '@angular/core';
import { AuthService } from './../_services/auth.service';
import { Navigation } from './navigation.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: Navigation;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService
      .login(this.model)
      .subscribe(
        next => console.log('Logged in successfully'),
        error => console.error('Failed to login')
      );
  }

  loggedIn() {
    const token = localStorage.getItem('jwtToken');
    return !!token;
  }

  logout() {
    localStorage.removeItem('jwtToken');
    console.log('Logged out');
  }
}
