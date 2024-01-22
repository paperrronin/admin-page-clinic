import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MaterialModule } from './material.module';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports:[
    BreadcrumbComponent,
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
