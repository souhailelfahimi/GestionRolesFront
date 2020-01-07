import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-permessions',
  templateUrl: './permessions.component.html',
  styleUrls: ['./permessions.component.css']
})
export class PermessionsComponent implements OnInit {

  public roles: any=[];
  public user:User;
  public role:Role
  constructor(private roleService:RolesService,private userService:AuthenticationService) { }

  ngOnInit() {
    this.roleService.getAllRoles().subscribe(res=>{
      this.roles=res
    },err=>{
      console.log(err)
    })
  }

  onSubmit(data){
    this.user=new User();
    this.role=new Role()
    this.user.username=data.login
    this.user.password=data.pass
    this.role.role=data.role
    this.user.roles.push(this.role)
    console.log(JSON.stringify(this.user));
    this.userService.register(JSON.stringify(this.user)).subscribe(res=>{
      console.log("success")
    },err=>{
      console.log(err)
    })
  }

}
