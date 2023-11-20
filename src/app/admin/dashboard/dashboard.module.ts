import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MainComponent } from './main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartjsModule } from '@coreui/angular-chartjs';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    ChartjsModule
  ]
})
export class DashboardModule { }
