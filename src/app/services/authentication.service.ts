import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  jwtToken = null
  constructor(private httpClient: HttpClient) { }


  public login(username, password):Observable<any>{
    return this.httpClient.post(environment.URL_API+"login", {username: username, password: password},
    {
      headers: {'Content-Type': 'application/json'},
      observe : 'response'
    })
  }

  public getToken(){
    return localStorage.getItem("JwtToken")
  }

  public logOut(){
    this.jwtToken = null
    localStorage.removeItem("JwtToken")
    localStorage.removeItem("isAdmin")
  }

  public saveToken(token){
    localStorage.setItem("JwtToken", token)
    var decoded = jwt_decode(token);
    console.log("roles ===>",decoded.roles);
    decoded.roles.forEach(role => {
     /* if(role.authority == 'admin') localStorage.setItem('isAdmin','true')
      else localStorage.setItem('role',)*/
    });
  }

  async register(user)
  {
    let jwtToken = localStorage.getItem("JwtToken");
    console.log("URL---",environment.URL_API+"register");
    await this.httpClient.post(environment.URL_API+"register",user,
    {responseType: 'text',
      headers: new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})
    }).toPromise()
  }

  public loadToken(){
    this.jwtToken = localStorage.getItem("JwtToken")
  }



}
