import { Component, OnInit, Input } from '@angular/core';
import { exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-exercise-details-page',
  templateUrl: './exercise-details-page.component.html',
  styleUrls: ['./exercise-details-page.component.css']
})
export class ExerciseDetailsPageComponent implements OnInit {

  @Input() exercise:exercise;
  
  constructor() { }

  ngOnInit(): void {
  }

}
