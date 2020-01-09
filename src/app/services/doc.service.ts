import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.prod';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private http: HttpClient) { }


  public addDoc(doc):Observable<any>
  {
    let jwtToken = localStorage.getItem("JwtToken");
    console.log("URL---",environment.URL_API+"docs",doc);
    return this.http.post(environment.URL_API+"documents/addoc/"+doc.id+"/"+doc.titre,null,
    {
      headers: new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})
    })
  }

  getAllDocs(){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"documents/all",{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }

  getDocsByFolder(id){
    let jwtToken = localStorage.getItem("JwtToken")
    return this.http.get(environment.URL_API+"documents/"+id,{headers : new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})});
  }
}
