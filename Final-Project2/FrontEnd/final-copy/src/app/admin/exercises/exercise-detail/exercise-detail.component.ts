import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  exercise:any;
  constructor(private route:ActivatedRoute,private router:Router) { 
     
     this.exercise=this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
