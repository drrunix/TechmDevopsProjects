import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admusers-home',
  templateUrl: './admusers-home.component.html',
  styleUrls: ['./admusers-home.component.css']
})
export class AdmusersHomeComponent implements OnInit {

usercount:number;
admincount:number;

  constructor(private  router:Router,private route:ActivatedRoute,private us:UserService) { }

  ngOnInit(): void {
       this.us.getUserCount().subscribe(
         (data:any)=>this.usercount=data.count ,
          ()=>this.usercount= 0
       )


       this.us.getAdminCount().subscribe(
        (data:any)=>this.admincount=data.count ,
         ()=>this.usercount= 0
      )
  }

  changeroute(current){
    this.router.navigate([current],{relativeTo:this.route.parent});
  }
}
