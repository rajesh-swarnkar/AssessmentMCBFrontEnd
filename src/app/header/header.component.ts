import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { IMessage } from '../auth/login/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showProfile: boolean;
  constructor(private route: Router,
              private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.authEmmiter.subscribe(check => {
      console.log('emitter');
      this.showHeader(check);
    });
  }

  showHeader(num: number): void {
    if (num === 2) {
      this.showProfile = true;
    } else {
      this.showProfile = false;
    }
  }
  logout(): void {
    //logout call
    
      this.authService.logout({username: localStorage.getItem('username'), password: ''}).subscribe(
        (data: IMessage) => {
          console.log(data.jwt);
          
        },
        (err) => {
         console.log('error occured in /logout call!',err);
        }
      );
    
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.showHeader(3);
    this.route.navigate(['/auth/login']);
  }
}
