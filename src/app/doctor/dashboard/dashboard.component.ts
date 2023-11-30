import { Component, OnInit } from '@angular/core';
import { DocCard } from 'src/app/core/models/docCard';
import { DoctorCardService } from 'src/app/core/service/doctor-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doctorCards: DocCard[]

  constructor(public docCardService: DoctorCardService) {

  }

  ngOnInit() {
    this.getDoctorCard()
  }

  private getDoctorCard() {
    this.docCardService.getDocCards().subscribe(res => {
      this.doctorCards = res
      console.log(res)
    })
  }

}
