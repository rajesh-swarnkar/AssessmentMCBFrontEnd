import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IMessage } from './auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hasError: boolean;
  message: string;
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  hide = true;
  loader: boolean;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  get email() { return this.signupForm.get('email'); }
  // tslint:disable-next-line:typedef
  get password() { return this.signupForm.get('password'); }
  onSubmit(): void {
    this.hasError = false;
    this.message = undefined;
    this.loader = true;
    this.authService.getToken({username: this.signupForm.value.email, password: this.signupForm.value.password}).subscribe(
      (data: IMessage) => {
        if (data && !data.jwt) {
          this.hasError = true;
          this.message = 'Invalid data';
          this.loader = false;
        } else {
          this.hasError = false;
          this.message = 'Login successfull, redirecting to prifile';
          localStorage.setItem('username', this.signupForm.value.email);
          localStorage.setItem('token', data.jwt);
          localStorage.setItem('role', data.role);
          setTimeout(() => {
            this.route.navigate(['']);
          }, 2000);
        }
      },
      (err) => {
        this.hasError = true;
        this.message = 'Something went wrong';
        this.loader = false;
      }
    );
  }
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minlength') ? 'Length should be more than 4' : '';
  }
}
