import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/model/profile';
import { exercise } from 'src/app/model/exercise';
import { workout } from 'src/app/model/workout';
import { ProfileService } from 'src/app/services/profile.service';
import { WorkoutService } from 'src/app/services/workout.service';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.component.html',
  styleUrls: ['./daily-activity.component.css']
})
export class DailyActivityComponent implements OnInit {
profile:profile;
exercises:exercise[]=[];
workout:workout;
status:any[]=[];
weight:number;
calories:number=0;
mins: number=0;
secs: number=0;
currentinterval:any;
currentActivity:string= "None";
currentIndex:number;
watchtoggle:boolean=true;
currentDuration:number;

  constructor(private ps:ProfileService,private ws:WorkoutService,private pss:ProgressService) { }

  ngOnInit(): void {

      this.ps.getProfile().subscribe(
        (profile:profile)=>{
           this.profile=profile;
           this.ws.getWorkoutByName(this.profile.subscription).subscribe(
             (workout:workout)=>{
               this.workout=workout
               this.ws.getWorkoutmap(this.workout.id).subscribe(
                 (data:any[])=>{
                       for(let x in data){
                         this.exercises.push(data[x].exercise)
                          this.pss.getStatus(data[x].exercise.id).subscribe(
                             (data:any)=>this.status[x]={status: data.status, duration: data.duration}
                          )
                       }
                   
                 }
               )
              }
           )
        }
      )
  }

   currentSelection(index){
     
     if(this.status[index].status=="incomplete"){
           this.currentActivity=this.exercises[index].name;
           this.currentIndex=index;
           this.status[this.currentIndex].status="pending";
     }
     else{
         alert("This Activity is Up for the day");
     }
   }
  timer(){
    if(this.currentActivity=="None")
         alert("You have not selected any Exercise")
    else{
    this.watchtoggle=false;
    this.secs=0;this.mins=0;
        this.currentinterval=setInterval(()=>{
            this.secs++;
            if(this.secs==60){
                 this.mins++;
                 this.secs=0;
            }
        },1000)
      }
  }

  stop(){
         clearInterval(this.currentinterval);
         this.watchtoggle=true;
  }

  finish(){
    this.currentDuration=Math.round(this.mins+ (this.secs/60));
    if(this.currentDuration<1)
         alert("You need to do an exercise atleast for a minute");
    else if(confirm("Are you finished this exercise?")){
        let index=this.currentIndex;
        console.log(index);
      
        this.secs=0;this.mins=0;this.watchtoggle=true;this.currentActivity="None";
        clearInterval(this.currentinterval);
        let obj={duration:this.currentDuration}
        this.pss.setStatus(this.exercises[index].id,obj).subscribe(
          (result:any)=>{
           
            if(this.profile.weight>=100&& this.profile.weight<=140)
                this.calories+=Number(this.exercises[index].calrange1)*obj.duration;
            else  if(this.profile.weight>=140&& this.profile.weight<=180)
                this.calories+=Number(this.exercises[index].calrange2)*obj.duration;
            else 
                this.calories+=Number(this.exercises[index].calrange3)*obj.duration;
            this.status[index].status=result.status;
            this.status[index].duration=result.duration;
          },
          ()=>{alert("something went wrong")}
        )
        
     }
  }

  updateProgress(){
       alert("event fired");
       
      if(this.weight==undefined||isNaN(this.weight)||this.weight<100||this.weight>=300){
        alert("invalid weight");
      
      }
      else{
        let status="incomplete";
        let count=0;
        let calories=0
        for(let x in this.exercises){
          if(this.status[x].status=="completed")
              count++;
              if(this.profile.weight>=100&& this.profile.weight<=140)
                 calories+=Number(this.exercises[x].calrange1)*this.status[x].duration;
          else  if(this.profile.weight>=140&& this.profile.weight<=180)
                calories+=Number(this.exercises[x].calrange2)*this.status[x].duration;
          else 
                 calories+=Number(this.exercises[x].calrange3)*this.status[x].duration;
        }

        this.calories=calories;
        console.log(count,this.exercises.length)
        if(count==this.exercises.length)
           status="complete"
        console.log(status)
           let obj={weight:this.weight,calories:this.calories,status:status};

           this.pss.setProgress(obj).subscribe(
             ()=>{alert("Updated")},
             ()=>{alert("Some issue")}
           )
      }
        
  }
}
