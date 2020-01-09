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
    console.log("URL---",environment.URL_API+"docs");
    return this.http.post(environment.URL_API+"documents/",doc,
    {
      headers: new HttpHeaders({'authorization':jwtToken,'Content-Type':'application/json'})
    })
  }
}
