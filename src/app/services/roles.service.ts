import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  addNewRole(role){
    let jwtToken = localStorage.getItem("JwtToken")
    console.log("here we goo : ",role)
    this.http.post(environment.URL_API+"roles/addroles",role,
      {responseType: 'text',
      headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})})
    .subscribe(res=>{
      console.log("success")
    },err=>{
      console.log(err) 
    })
  }

  getAllRoles(){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"roles/getAll",{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }


}
