import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmExercisesHomeComponent } from './adm-exercises-home/adm-exercises-home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExercisesFormComponent } from './exercises-form/exercises-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';


const route:Routes=[
  {path:"",component: AdmExercisesHomeComponent},
  {path:"details",component:ExerciseDetailComponent}
]

@NgModule({
  declarations: [AdmExercisesHomeComponent, ExercisesFormComponent, ExerciseDetailComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),FormsModule, ReactiveFormsModule,SharedModule
  ]
})
export class ExercisesModule { }
