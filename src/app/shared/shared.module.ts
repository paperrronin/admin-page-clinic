import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbComponent,
    MaterialModule
  ]
})
export class SharedModule { }
