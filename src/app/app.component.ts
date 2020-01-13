import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  jwtToken:any;
  constructor(private autu:AuthenticationService,private router:Router) {
     this.jwtToken = localStorage.getItem("JwtToken")
  }
  logout(){
    this.autu.logOut()
    this.router.navigateByUrl('/login')
  }
}
