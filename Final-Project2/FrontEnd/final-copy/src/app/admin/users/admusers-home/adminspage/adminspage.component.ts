import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { LogService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adminspage',
  templateUrl: './adminspage.component.html',
  styleUrls: ['./adminspage.component.css']
})
export class AdminspageComponent implements OnInit {
  username:string="";
  users:user[];
  constructor(private us:UserService,private log:LogService) { }

  ngOnInit(): void {
    this.us.getUsers('admin').subscribe(
        (result:user[])=>this.users=result,
        ()=> this.users=[]
    )
  }

  storeUser(){

    let obj={
      username:this.username,
      password: 'fitnessadmin',
      email:this.username+"@fitnesstracker.com",
      role:'admin'}
      this.username=""
      this.log.register(obj).subscribe(
         ()=>{this.username="";alert("user added");this.ngOnInit();},
         ()=>{this.username="";alert("try again")}
      )
  }

}
