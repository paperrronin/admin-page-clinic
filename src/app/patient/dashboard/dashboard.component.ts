import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public name:string

  constructor(
    public authService: AuthService) { }

    ngOnInit() {
      this.getPatientName()
    }

    private getPatientName():string{
      console.log(this.authService.currentUserValue.data)
      this.name = this.authService.currentUserValue.data.username
      return this.name
    }

}
