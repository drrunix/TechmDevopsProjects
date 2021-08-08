import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {



  
  httpOptions;
  constructor(private http:HttpClient,private log:LogService) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.log.authstring
      })
    }
  }

  addWorkout(obj):Observable<object>{
   
     return this.http.post("http://localhost:5000/workout/add",obj,this.httpOptions);
  }

  getWorkout():Observable<object>{
    
     return this.http.get("http://localhost:5000/workouts",this.httpOptions);
  }
  
  getWorkoutByName(name):Observable<object>{
    
    return this.http.get("http://localhost:5000/workouts/"+name,this.httpOptions);
 }

  getWorkoutmap(id):Observable<object>{
    
    return this.http.get("http://localhost:5000/workoutmap/"+id,this.httpOptions);
 }

  addWorkoutmap(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': this.log.authstring
      })
    }
      return this.http.post("http://localhost:5000/workoutmap/add",obj,this.httpOptions);
    }
  }

