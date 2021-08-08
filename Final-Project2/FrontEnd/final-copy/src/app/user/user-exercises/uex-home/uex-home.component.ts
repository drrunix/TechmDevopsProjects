import { Component, OnInit } from '@angular/core';
import { exercise } from 'src/app/model/exercise';
import { MatDialog } from '@angular/material/dialog';
import { ExercisesService } from 'src/app/services/exercises.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uex-home',
  templateUrl: './uex-home.component.html',
  styleUrls: ['./uex-home.component.css']
})
export class UexHomeComponent implements OnInit {

  exercises:exercise[]=[];
  constructor(private dialog:MatDialog,private es:ExercisesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.es.getExercise().subscribe(
         (data:exercise[])=> this.exercises=data,
         ()=>this.exercises=[]
      )
  }
  
  changeroute(current){
    this.router.navigate(['details'],{relativeTo:this.route.parent,state:current});;
  }

  
}
