import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PermessionsService } from 'src/app/services/permessions.service';
import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permessions',
  templateUrl: './permessions.component.html',
  styleUrls: ['./permessions.component.css']
})
export class PermessionsComponent implements OnInit {

  public roles: any=[];
  public user:User;
  public role:Role
  public users:any=[];
  private addPermession=true;
  private updatePermession=false;
  constructor(private router:Router,private snotifyService:SnotifyService,private roleService:RolesService,private userService:AuthenticationService,private permessionService:PermessionsService) { }

  ngOnInit() {
    console.log(this.userService.getRoles())
    let jwtToken = localStorage.getItem("JwtToken");
    if(jwtToken==null) this.router.navigateByUrl('/login')
    this.user=new User();
    this.role=new Role()
    this.getAllusers()
    this.roleService.getAllRoles().subscribe(res=>{
      this.roles=res
    },err=>{
      console.log(err)
    })
  }

  getAllusers(){
    this.permessionService.getAllusers().subscribe(res=>{
      console.log(res)
      this.users=res
    },err=>{
      console.log(err)
    })
  }

  async onSubmit(data){
    this.user.roles=[]
    this.user.roles.push(this.role)
    console.log(JSON.stringify(this.user));
    await this.userService.register(JSON.stringify(this.user))
    this.getAllusers()
    this.user=new User()
    this.role=new Role()
  }

  onUpdate(id){
    this.updatePermession=true
    this.addPermession=false
    console.log("id====> "+id)
    this.permessionService.getUserById(id).subscribe(res=>{
      this.user.username=res['username']
      this.user.id=id
      this.role.role=res['roles'][0]['name']
    },err=>{

    })

  }
  onCreate(){
    this.updatePermession=false
    this.addPermession=true
    this.user=new User()
    this.role=new Role()
  }

  async onDelete(id){
   await this.permessionService.deleteUser(id)
   this.getAllusers()
   this.showSuccessNotification("user a été supprimer avec success")
  }


  async onUpdatePermession(id){
    this.user.roles=[]
    console.log(id)
    this.user.id=id
    this.user.roles.push(this.role)
    console.log(this.user)
    await this.permessionService.updateUser(JSON.stringify(this.user))
    this.getAllusers()
    this.showSuccessNotification("user a été modifier avec success")
    this.user=new User()
    this.role=new Role()
    this.addPermession=true
    this.updatePermession=false
  }

  showDeleteNotification(Msg){
    this.snotifyService.warning(Msg, {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
  }
  showSuccessNotification(Msg){
    this.snotifyService.success(Msg, {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
  }

}
