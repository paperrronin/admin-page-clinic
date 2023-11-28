import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { Role } from './core/models/role';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      data: {
        role: Role.Admin,
      }
  },
  {
    path: 'doctor',
    // canActivate: [AuthGuard],
    data: {
      role: Role.Doctor,
    },
    loadChildren: () =>
      import('./doctor/doctor.module').then((m) => m.DoctorModule),
  },
  {
    path: 'patient',
    // canActivate: [AuthGuard],
    data: {
      role: Role.Patient,
    },
    loadChildren: () =>
      import('./patient/patient.module').then((m) => m.PatientModule),
  },
  { path: '**', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
