import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { Routes ,RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const route:Routes=[
  {path:"home",
  component:AdminhomeComponent,
  children:[
    {
      path:"awp",  
      loadChildren:() => import('../admin/adminworkouts/adminworkouts.module').then(m => m.AdminworkoutsModule)
     },
     {
       path:"aex",  
       loadChildren:() => import('../admin/exercises/exercises.module').then(m => m.ExercisesModule)
      },
      {
       path:"ausers",  
       loadChildren:() => import('../admin/users/users.module').then(m => m.UsersModule)
      }
    ]

  },

]

@NgModule({
  declarations: [AdminhomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),SharedModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
