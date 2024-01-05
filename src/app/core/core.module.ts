import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { RightSidebarService } from './service/rightsidebar.service';
import { AuthGuard } from './guards/auth.guard';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RightSidebarService
  ],
})
export class CoreModule { }
