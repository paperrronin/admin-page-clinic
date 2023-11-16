import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SigninComponent } from './signin/signin.component';
import { Page404Component } from './page404/page404.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LockedComponent } from './locked/locked.component';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    Page404Component,
    ForgotPasswordComponent,
    LockedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
