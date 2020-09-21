import { Component, Input, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
isAuth:boolean;

constructor(private authService:AuthService){
  if (this.authService.signIn){
    this.isAuth=true;
  }
  else{
    this.isAuth=false;
  }
}

ngOnInit(){
  
}

getValue(){
  this.authService.signIn()
}



}
