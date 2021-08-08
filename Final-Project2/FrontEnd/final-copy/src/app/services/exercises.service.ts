import { Injectable } from '@angular/core';
import { LogService } from './login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.log.authstring
      })
    }
  }

  addExercise(obj):Observable<object>{
   
     return this.http.post("http://localhost:5000/exercises/add",obj,this.httpOptions);
  }

  getExercise():Observable<object>{
    
     return this.http.get("http://localhost:5000/exercises",this.httpOptions);
  }
}
