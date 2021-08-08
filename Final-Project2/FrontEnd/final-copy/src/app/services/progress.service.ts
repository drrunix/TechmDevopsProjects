import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.log.authstring
      })
    }
  }
  
  getStatus(exerciseid):Observable<object>{
      return this.http.get("http://localhost:5000/exercisetracker/"+exerciseid,this.httpOptions)
  }

  setStatus(exerciseid,obj):Observable<object>{
    return this.http.put("http://localhost:5000/exercisetracker/"+exerciseid,obj,this.httpOptions)
  }

  setProgress(obj):Observable<object>{
    return this.http.put("http://localhost:5000/progressupdate",obj,this.httpOptions)
  }

  getProgress():Observable<object>{
    return this.http.get("http://localhost:5000/progressdata",this.httpOptions)
  }
  
}
