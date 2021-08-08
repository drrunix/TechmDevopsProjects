import { Component, OnInit } from '@angular/core';
import { workout } from 'src/app/model/workout';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-uwp-home',
  templateUrl: './uwp-home.component.html',
  styleUrls: ['./uwp-home.component.css']
})
export class UwpHomeComponent implements OnInit {

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

  
}
