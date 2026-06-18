import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/interceptors/auth.services';
import { error } from 'console';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  //constructor(private router: Router) {}

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

   constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  

  /*register() {

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
  }*/
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isStrongPassword(password: string): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  }
  onLogin(){

    if (!this.email || !this.password) {
      alert('Please enter Email and Password');
      return;
    }
    /*if (!this.isValidEmail(this.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!this.isStrongPassword(this.password)) {
      alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character');
      return;
    }

*/
    const credential = {
      email: this.email,
      password: this.password
  };
  console.log("Sending to API:", credential);
  this.authService.login(credential).subscribe({
    next: (res:any) => {
    alert(res.message);

    if(res.token) {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    }
    },
    error: (err) => {
      alert(err.error.message );
    }
  });
}
   register() {
    if(!this.registerData.fullName || !this.registerData.email || !this.registerData.password) {
      alert('Fill all fields');
      return;
    }
    if(!this.isValidEmail(this.registerData.email)) {
      alert("Invalid email format");
      return;
    }
    if(!this.isStrongPassword(this.registerData.password)) {
      alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character');
      return;
    }
    const payload = {
      fullName: this.registerData.fullName,
      email: this.registerData.email,
      password: this.registerData.password,
      userType: this.registerData.userType
    };
    console.log('Register payload : ', payload);
    //alert("Registration Request Submitted");
this.authService.register(payload).subscribe({
  next : (res:any) => {
    console.log('Registration successful', res);
    alert('Registration successful. Please login.');

    this.showRegister = false;
    this.registerData = {
      fullName: '',
      email: '',
      password: '',
      userType: 1
    };
  }, 
  error : (err)=>{
    console.error('Registration failed', err);
    alert(err.error || "User already exists or server error");
  }

});
}
  sendResetRequest() {
    console.log('Reset Request', this.forgotEmail);
  }
}