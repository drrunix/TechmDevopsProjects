import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.log.authstring
      })
    }
  }

  updateItem(item,obj):Observable<object>
  {
    return this.http.post("http://localhost:5000/profile/"+item,obj,this.httpOptions);
  }
  
  getProfile():Observable<object>{
     return this.http.get("http://localhost:5000/profile",this.httpOptions);
  }
}
