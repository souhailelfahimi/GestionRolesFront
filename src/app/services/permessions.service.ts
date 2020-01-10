import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PermessionsService {

  constructor(private http:HttpClient) { }

  getAllusers(){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"users",{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }

  async updateUser(user){
    let jwtToken = localStorage.getItem("JwtToken")
    console.log(user)
    await this.http.post(environment.URL_API+"users/updateuser",user,{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})}).toPromise()
  }

  getUserById(id){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"users/"+id,{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})})
  }
  async deleteUser(id){
    let jwtToken = localStorage.getItem("JwtToken")
    await this.http.delete(environment.URL_API+"users/delete/"+id,{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})}).toPromise()

  }


}
