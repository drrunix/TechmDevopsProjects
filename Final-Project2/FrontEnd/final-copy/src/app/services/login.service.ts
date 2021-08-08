import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogService {
 httpOptions;
 username:String='';
 usertype:String='';
 authstring:string='';
 status:boolean=false;
  constructor(private http:HttpClient) {
      let username=sessionStorage.getItem("username");
      let usertype=sessionStorage.getItem("usertype");
      let authstring=sessionStorage.getItem("authstring");
      if(username&&usertype){
        this.status=true;
        this.username=username;
        this.usertype=usertype;
        this.authstring=authstring;
      }
   }

  getStatus():boolean{
    return this.status;
  }

  // To Register a User
  register(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
    }
    return this.http.post("http://localhost:5000/users",obj,this.httpOptions);
  }

  //To check avalailability of mail id and username

  check(str):Observable<object>{
    return this.http.get("http://localhost:5000/userlog/"+str,this.httpOptions);
  }

// to Login
  login(username,password):Observable<object>{
    this.authstring='Basic '+btoa(username+":"+password);
    sessionStorage.setItem("authstring",this.authstring);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic '+btoa(username+":"+password)
      })
    }
    return this.http.post("http://localhost:5000/userlog/"+username,{},this.httpOptions);
  }

  logout():void{
     this.authstring="";
     this.username="";
     this.usertype="";
     sessionStorage.removeItem("authstring");
     sessionStorage.removeItem("username");
     sessionStorage.removeItem("usertype");
     
  }
}
