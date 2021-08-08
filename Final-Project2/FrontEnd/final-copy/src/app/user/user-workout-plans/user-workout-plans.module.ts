import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UwpHomeComponent } from './uwp-home/uwp-home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';
import { WorkoutItemDetailsComponent } from 'src/app/shared/workout-item-details/workout-item-details.component';


const route:Routes=[
  {path:"",component: UwpHomeComponent},
  {path:"details",component:WorkoutItemDetailsComponent}

]



@NgModule({
  declarations: [UwpHomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),SharedModule,AngmaterialModule
  ]
})
export class UserWorkoutPlansModule { }
