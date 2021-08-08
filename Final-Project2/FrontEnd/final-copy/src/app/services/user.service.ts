import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.log.authstring
      })
    }
  }

  getUserCount():Observable<object>{
    return this.http.get("http://localhost:5000/userstats/count",this.httpOptions);
  }

  getAdminCount():Observable<object>{
    return this.http.get("http://localhost:5000/userstats/acount",this.httpOptions);
  }

  getUsers(usertype):Observable<object>{
    return this.http.get("http://localhost:5000/userdata/"+usertype,this.httpOptions);
  }
}
