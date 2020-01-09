import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: HttpClient) { }

  public addFolder(folder):Observable<any>
  {
    let jwtToken = localStorage.getItem("JwtToken");
    console.log("URL---",environment.URL_API+"folders");
    return this.http.post(environment.URL_API+"folders/",folder,
    {
      headers: new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})
    })
  }

  getAllFolders(){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"folders/all",{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }
  getFolderById(id)
 {
 	let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"folders/"+id,
    	{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
 }

}
