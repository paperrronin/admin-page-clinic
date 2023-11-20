import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { ChartjsModule } from '@coreui/angular-chartjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashboardRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    ChartjsModule
  ]
})
export class AdminModule { }
