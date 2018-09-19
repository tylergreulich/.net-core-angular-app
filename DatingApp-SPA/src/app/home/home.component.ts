import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegisterForm = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  toggleRegisterForm() {
    this.isRegisterForm = true;
  }

  cancelRegisterForm(registerForm: boolean) {
    this.isRegisterForm = registerForm;
  }
}
