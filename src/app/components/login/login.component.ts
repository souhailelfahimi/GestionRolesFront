import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    let jwtToken = localStorage.getItem("JwtToken");
    if(jwtToken) this.router.navigateByUrl('/folder')
  }


  onSubmit(email,pass){
    this.authenticationService.login(email.value, pass.value).subscribe(
      res => {
            let jwtToken = res.headers.get('Authorization')
            this.authenticationService.saveToken(jwtToken)
            this.router.navigate(['/folder'])
            console.log(res)
      },
      err => {
        console.log(err)
      })
  }

}
