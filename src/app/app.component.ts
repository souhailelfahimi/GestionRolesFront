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
  constructor(private autu:AuthenticationService,private router:Router) { }
  logout(){
    this.autu.logOut()
    this.router.navigateByUrl('/login')
  }
}
