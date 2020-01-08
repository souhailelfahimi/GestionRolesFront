import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }


  onSubmit(data)
  {
  	console.log(data);
   this.authService.register(data.f).subscribe(result=>{
   	console.log(result);
   });
  }

}
