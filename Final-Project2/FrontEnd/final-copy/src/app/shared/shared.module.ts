import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngmaterialModule } from '../angmaterial/angmaterial.module';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { ExerciseItemComponent } from './exercise-item/exercise-item.component';
import { ExerciseDetailsPageComponent } from './exercise-details-page/exercise-details-page.component';
import {MatVideoModule} from 'mat-video';
import { WorkoutItemComponent } from './workout-item/workout-item.component';
import { WorkoutItemDetailsComponent } from './workout-item-details/workout-item-details.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ToolbarComponent, MenuitemComponent, DashboardItemComponent, ExerciseItemComponent, ExerciseDetailsPageComponent, WorkoutItemComponent, WorkoutItemDetailsComponent],
  imports: [
    CommonModule,AngmaterialModule,MatVideoModule,FormsModule
  ],
  exports:[
    ToolbarComponent,DashboardItemComponent ,ExerciseItemComponent,ExerciseDetailsPageComponent
    ,WorkoutItemComponent,WorkoutItemDetailsComponent
  ]
})
export class SharedModule { }
