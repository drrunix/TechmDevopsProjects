import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UprogressHomeComponent } from './uprogress-home/uprogress-home.component';
import { Routes, RouterModule } from '@angular/router';
import { DailyActivityComponent } from './daily-activity/daily-activity.component';
import { FormsModule } from '@angular/forms';
import { UserTablesComponent } from './user-tables/user-tables.component';
import { UserGraphsComponent } from './user-graphs/user-graphs.component';
import { LineChartComponent } from './user-graphs/line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
const route:Routes=[
  {path:"",component: UprogressHomeComponent},
  {path:"activity",component: DailyActivityComponent},
  {path:"tables",component: UserTablesComponent},
  {path:"graphs",component: UserGraphsComponent},
]


@NgModule({
  declarations: [UprogressHomeComponent, DailyActivityComponent, UserTablesComponent, UserGraphsComponent, LineChartComponent],
  imports: [
    CommonModule,RouterModule.forChild(route),FormsModule,NgxChartsModule
  ]
})
export class UserProgressModule { }
