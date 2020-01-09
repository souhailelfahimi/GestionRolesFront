import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }

  async addNewRole(role){
    let jwtToken = localStorage.getItem("JwtToken")
    console.log("here we goo : ",role)
    await this.http.post(environment.URL_API+"roles/addroles",role,
      {responseType: 'text',
      headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})}).toPromise()
  }

  getAllRoles(){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"roles/getAll",{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }

  async deleteRole(id){
    let jwtToken = localStorage.getItem("JwtToken")
    await this.http.delete(environment.URL_API+"roles/delete/"+id,{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})}).toPromise()
  }


}
