import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthLayoutComponent } from './app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './app-layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({

  declarations: [
    AuthLayoutComponent, 
    MainLayoutComponent, 
    HeaderComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgbModule, 
    SharedModule,
    MatTabsModule, 
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ]
 
})
export class LayoutModule {}
