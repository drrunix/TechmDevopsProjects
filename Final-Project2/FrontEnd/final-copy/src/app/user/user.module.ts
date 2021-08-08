import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Routes ,RouterModule, RouterOutlet} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const route:Routes=[
  {
  path:"home",
  component: UserhomeComponent,
  children:[
     {
     path:"uwp",  
     loadChildren:() => import('../user/user-workout-plans/user-workout-plans.module').then(m => m.UserWorkoutPlansModule)
    },
    {
      path:"uex",  
      loadChildren:() => import('../user/user-exercises/user-exercises.module').then(m => m.UserExercisesModule)
     },
     {
      path:"upro",  
      loadChildren:() => import('../user/user-profile/user-profile.module').then(m => m.UserProfileModule)
     },
     {
      path:"uprogress",  
      loadChildren:() => import('../user/user-progress/user-progress.module').then(m => m.UserProgressModule)
     }

  ]
 },

]


@NgModule({
  declarations: [UserhomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),SharedModule,NgxChartsModule
  ]
})
export class UserModule { }
