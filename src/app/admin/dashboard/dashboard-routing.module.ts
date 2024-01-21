import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent as patientDashboard } from "./../../patient/dashboard/dashboard.component";
import { DashboardComponent as doctorDashboard } from "./../../doctor/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: "dashboard2",
    component: Page404Component,
  },
  {
    path: "doctor-dashboard",
    component: doctorDashboard,
  },
  {
    path: "patient-dashboard",
    component: patientDashboard,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
