import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrls: ['./userspage.component.css']
})
export class UserspageComponent implements OnInit {
 users:user[];
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.us.getUsers('user').subscribe(
        (result:user[])=>this.users=result,
        ()=> this.users=[]
    )
  }

}
