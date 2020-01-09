import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../models/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	private user:User;
  constructor(private authService:AuthenticationService) {this.user=new User(); }

  ngOnInit() {
  }


  onSubmit(data)
  {
  	console.log(data);
  	

   this.authService.register(this.user).subscribe(result=>{
   	console.log(result);
   });
  }

}
