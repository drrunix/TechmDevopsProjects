import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmusersHomeComponent } from './admusers-home/admusers-home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserspageComponent } from './admusers-home/userspage/userspage.component';
import { AdminspageComponent } from './admusers-home/adminspage/adminspage.component';
import { UsertableComponent } from './admusers-home/usertable/usertable.component';
import { AngmaterialModule } from 'src/app/angmaterial/angmaterial.module';
import { FormsModule } from '@angular/forms';


const route:Routes=[
  {path:"",component: AdmusersHomeComponent},
  {path:"users",component:UserspageComponent},
  {path:"admins",component:AdminspageComponent}

]


@NgModule({
  declarations: [AdmusersHomeComponent, UserspageComponent,AdminspageComponent, UsertableComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),SharedModule,AngmaterialModule,FormsModule
  ]
})
export class UsersModule { }
