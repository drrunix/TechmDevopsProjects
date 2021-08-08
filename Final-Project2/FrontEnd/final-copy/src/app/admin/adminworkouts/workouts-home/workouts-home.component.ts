import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutFormComponent } from '../workout-form/workout-form.component';
import { WorkoutService } from 'src/app/services/workout.service';
import { workout } from 'src/app/model/workout';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workouts-home',
  templateUrl: './workouts-home.component.html',
  styleUrls: ['./workouts-home.component.css']
})
export class WorkoutsHomeComponent implements OnInit {
workouts:workout[];
  constructor(private router:Router,private route:ActivatedRoute,private dialog:MatDialog,private ws:WorkoutService) { }

  ngOnInit(): void {
    this.ws.getWorkout().subscribe(
      (data:workout[])=> this.workouts=data,
      ()=>this.workouts=[]
   )
  }

  changeroute(current){
    this.router.navigate(['details'],{relativeTo:this.route.parent,state:current});;
  }

  
  loadDialog(){
    
    const dialogRef = this.dialog.open(WorkoutFormComponent, {
      width: '900px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(()=>this.ngOnInit());

}

}
