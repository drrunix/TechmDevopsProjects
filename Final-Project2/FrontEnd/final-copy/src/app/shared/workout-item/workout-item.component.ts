import { Component, OnInit, Input } from '@angular/core';
import { workout } from 'src/app/model/workout';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
  styleUrls: ['./workout-item.component.css']
})
export class WorkoutItemComponent implements OnInit {
@Input() workout:workout;
  constructor() { }

  ngOnInit(): void {
  }

}
