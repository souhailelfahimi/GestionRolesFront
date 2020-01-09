import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { Role } from 'src/app/models/role.model';
import { Permession } from 'src/app/models/permession.model';
import { SnotifyService } from 'ng-snotify';

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
  private all=false;
  private consultation=false;
  private ajouter=false;
  private supprimer=false;
  private maj=false;

  private addRole=true;
  private updateRole=false;
  constructor(private roleService:RolesService,private snotifyService:SnotifyService) {
    this.role=new Role();
  }

  ngOnInit() {
    this.getAllRoles()
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

  getAllRoles(){
   this.roleService.getAllRoles().subscribe(res=>{
    console.log(res)
    this.roles=res
   },err=>{
    console.log(err)
   })
  }


  async onSubmit(data){

    //console.log(data['name'])
    //console.log(this.role.role)


    if(this.all){
      this.permession=new Permession();
      this.permession.id=1
      this.role.permessions.push(this.permession)
    }
    if(this.ajouter){
      this.permession=new Permession();
      this.permession.id=2
      this.role.permessions.push(this.permession)
    }
    if(this.supprimer){
      this.permession=new Permession();
      this.permession.id=3
      this.role.permessions.push(this.permession)
    }
    if(this.consultation){
      this.permession=new Permession();
      this.permession.id=4
      this.role.permessions.push(this.permession)
    }
    if(this.maj){
      this.permession=new Permession();
      this.permession.id=5
      this.role.permessions.push(this.permession)
    }
    console.log(JSON.stringify(this.role))

    await this.roleService.addNewRole(JSON.stringify(this.role));

    this.getAllRoles();

    this.showSuccessNotification("role a été ajouter avec success")

  }

  async onDelete(id){
    await this.roleService.deleteRole(id)
    this.getAllRoles();
    this.showDeleteNotification("role a été supprimer")
  }


  showAddRole(){
    this.addRole=true
    this.updateRole=false
    this.role=new Role();
    this.all=false;
    this.consultation=false;
    this.maj=false;
    this.ajouter=false;
    this.supprimer=false;
  }

  onUpdate(id){
    this.addRole=false;
    this.updateRole=true;
    this.role=new Role();
    this.all=false;
    this.consultation=false;
    this.maj=false;
    this.ajouter=false;
    this.supprimer=false;

    this.roleService.getRoleById(id).subscribe(res=>
      {
        console.log(res)
        this.role.role=res['role']
       for(let i=0;i<res['permessions'].length;i++){
         console.log(res['permessions'][i]['name'])
      if(res['permessions'][i]['name']=='All')
        this.all=true;
        if(res['permessions'][i]['name']=='consultation')
        this.consultation=true;
        if(res['permessions'][i]['name']=='modification')
        this.maj=true;
        if(res['permessions'][i]['name']=='ajouter')
        this.ajouter=true;
        if(res['permessions'][i]['name']=='delete')
        this.supprimer=true;

       }






    },err=>{
      console.log(err)
    })




  }



}
