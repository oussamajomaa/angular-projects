import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isAuth:boolean;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSignIn(){
    this.authService.signIn();
    this.isAuth = this.authService.isAuth;
    this.router.navigate(['tabou']);
  }

  onSignOut() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
  }

}
