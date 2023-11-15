import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { SigninComponent } from './authentication/signin/signin.component';
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
  { path: '**', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
