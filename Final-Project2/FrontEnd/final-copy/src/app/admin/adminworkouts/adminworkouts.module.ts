import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsHomeComponent } from './workouts-home/workouts-home.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkoutItemDetailsComponent } from 'src/app/shared/workout-item-details/workout-item-details.component';


const route:Routes=[
  {path:"",component: WorkoutsHomeComponent},
  {path:"details",component:WorkoutItemDetailsComponent}
]

@NgModule({
  declarations: [WorkoutsHomeComponent, WorkoutFormComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),FormsModule,ReactiveFormsModule,AngmaterialModule,SharedModule
  ]
})
export class AdminworkoutsModule { }
