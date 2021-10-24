import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './login/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8888/api';
  authEmmiter: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  constructor(private http: HttpClient) { }

  getToken(user: IUser): any {
    return this.http.post(`${this.url}/authenticate`, user);
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload: any = decode(token);
      console.log('tokenPayload: ', tokenPayload);
      if (Date.now() >= tokenPayload.exp * 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.authEmmiter.next(1);
        return false;
      } else {
        this.authEmmiter.next(2);
        return true;
      }
    } else {
      this.authEmmiter.next(3);
      return false;
    }
  }

  logout(user: IUser): any {
    return this.http.post(`${this.url}/logout`, user);
  }

}
