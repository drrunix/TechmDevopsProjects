import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { ProfileService } from 'src/app/services/profile.service';
import { profile } from 'src/app/model/profile';
import { LogService } from 'src/app/services/login.service';

@Component({
  selector: 'app-workout-item-details',
  templateUrl: './workout-item-details.component.html',
  styleUrls: ['./workout-item-details.component.css']
})
export class WorkoutItemDetailsComponent implements OnInit {

  workout:any=[];
  workoutmap:any[];
  buttonText:string="Subscribe";
  flag:boolean=true;
  constructor(public log:LogService,
    private route:ActivatedRoute,private router:Router,private ws:WorkoutService,private ps:ProfileService) { 
     
     this.workout=this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
      this.ws.getWorkoutmap(this.workout.id).subscribe(
        (data:any[])=>this.workoutmap=data,
        ()=>this.workoutmap=[]
      )

      this.ps.getProfile().subscribe(
          (data:profile)=>{
              if(data.subscription)
                 this.flag=false;
              if(data.subscription==this.workout.name){
               this.buttonText="Subscribed";
              }
          }
      )
  }

  subscribe(){

    let result;
      if(!this.flag)
      result= confirm("Do you want to subscribe ? You already have Subscription ")
      if(result)
         this.flag=true;
       if(this.flag)
       this.ps.updateItem("subscription",{"subscription":this.workout.name}).subscribe(
           (data:any)=>{this.buttonText="Subscribed"},
           ()=>{alert("something went wrong")}
       )
  }

  round(x){
    return Math.round(x);
  }
}
