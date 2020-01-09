import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Role } from 'src/app/models/role.model';
import { Permession } from 'src/app/models/permession.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  isCollapsed = false;
  private role: Role;
  private permession: Permession;
  private roles:any=[];
  constructor(private roleService:RolesService) {
    this.role=new Role();
  }

  ngOnInit() {
    this.getAllRoles()
  }

  getAllRoles(){
   this.roleService.getAllRoles().subscribe(res=>{
    console.log(res)
    this.roles=res
   },err=>{
    console.log(err)
   })
  }


  async onSubmit(data){

    console.log(data['name'])
    this.role=new Role();
    this.role.role=data['name']

    if(data['all']){
      this.permession=new Permession();
      this.permession.id=1
      this.role.permessions.push(this.permession)
    }
    if(data['ajouter']){
      this.permession=new Permession();
      this.permession.id=2
      this.role.permessions.push(this.permession)
    }
    if(data['supprimer']){
      this.permession=new Permession();
      this.permession.id=3
      this.role.permessions.push(this.permession)
    }
    if(data['consultation']){
      this.permession=new Permession();
      this.permession.id=4
      this.role.permessions.push(this.permession)
    }
    if(data['maj']){
      this.permession=new Permession();
      this.permession.id=5
      this.role.permessions.push(this.permession)
    }
    console.log(JSON.stringify(this.role))

    await this.roleService.addNewRole(JSON.stringify(this.role));

    this.getAllRoles();
  }

  async onDelete(id){
    await this.roleService.deleteRole(id)
    this.getAllRoles();
  }

}
