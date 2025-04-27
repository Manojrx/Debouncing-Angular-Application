import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor( private http : HttpClient) { }

  api( url:any):Observable<any>{
    return  this.http.get(url ,{
      headers : new HttpHeaders ( { 'Content-Type' : 'application/json'})
    })
  }
}
