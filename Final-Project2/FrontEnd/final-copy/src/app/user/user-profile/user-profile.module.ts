import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UproHomeComponent } from './upro-home/upro-home.component';
import { Routes, RouterModule } from '@angular/router';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';
import { FormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const route:Routes=[
  {path:"",component: UproHomeComponent},

]


@NgModule({
  declarations: [UproHomeComponent, UpdateProfileComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),AngmaterialModule,FormsModule
  ]
})
export class UserProfileModule { }
