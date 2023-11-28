import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
