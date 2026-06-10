import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  email = '';
  password = '';

  showRegister = false;
  showForgot = false;

  registerData = {
    fullName: '',
    email: '',
    password: '',
    userType: 1
  };

  forgotEmail = '';
  resetReason = '';

  login() {

    if (!this.email || !this.password) {
      alert('Please enter Email and Password');
      return;
    }

    console.log('Login', {
      email: this.email,
      password: this.password
    });

    this.router.navigate(['/dashboard']);
  }

  register() {

    if (
      !this.registerData.fullName ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      alert('Fill all fields');
      return;
    }

    console.log('Register', this.registerData);

    alert('Registration Request Submitted');

    this.showRegister = false;

    this.registerData = {
      fullName: '',
      email: '',
      password: '',
      userType: 1
    };
  }

  sendResetRequest() {

    if (!this.forgotEmail) {
      alert('Enter Email');
      return;
    }

    console.log('Reset Request', {
      email: this.forgotEmail,
      reason: this.resetReason
    });

    alert('Request sent to Super Admin');

    this.showForgot = false;
    this.forgotEmail = '';
    this.resetReason = '';
  }
}