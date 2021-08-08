import { Component, OnInit, Input } from '@angular/core';
import { exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
@Input() exercise:exercise;
  constructor() { }

  ngOnInit(): void {
  }

}
