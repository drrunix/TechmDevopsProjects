import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UexHomeComponent } from './uex-home/uex-home.component';
import { RouterModule, Routes } from '@angular/router';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExerciseDetailComponent } from 'src/app/admin/exercises/exercise-detail/exercise-detail.component';

const route:Routes=[
  {path:"",component: UexHomeComponent},
  {path:"details",component: ExerciseDetailComponent}
]


@NgModule({
  declarations: [UexHomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),AngmaterialModule,SharedModule
  ]
})
export class UserExercisesModule { }
