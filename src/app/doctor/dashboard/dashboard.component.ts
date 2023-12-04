import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/core/models/chart';

import { ChartType } from 'src/app/core/models/chartEnum';
import { DocCard } from 'src/app/core/models/docCard';
import { Role } from 'src/app/core/models/role';
import { AuthService } from 'src/app/core/service/auth.service';
import { ChartService } from 'src/app/core/service/chart.service';
import { DoctorCardService } from 'src/app/core/service/doctor-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public doctorCards: DocCard[];
  public patientCharts:Chart[];
  public appointmentCharts:Chart[];


  constructor (
    public docCardService: DoctorCardService,
    public chartService: ChartService,
    public authService:AuthService ) {
  }

  ngOnInit() {
    this.getCards()
    this.buildCharts(ChartType.AreaSpline)
    this.buildCharts(ChartType.RadialBar)
  }


  private getCards(){
    this.docCardService.getDocCards().subscribe(res => {
      this.doctorCards = res
    })
  }

  private buildCharts(type: ChartType) {
    
    this.chartService.getCharts(type, this.authService.currentUserValue.data.role).subscribe(res => {
      switch (type) {
        case ChartType.AreaSpline:
          this.patientCharts = res;
          break;
        case ChartType.RadialBar:
          // this.appointmentCharts = res;
          this.appointmentCharts = [
            {
              id:1,
              chartOptions: {
                series: [44, 55, 67],
                chart: {
                  height: 350,
                  type: "radialBar"
                },
                plotOptions: {
                  radialBar: {
                    dataLabels: {
                      name: {
                        fontSize: "22px"
                      },
                      value: {
                        fontSize: "16px"
                      },
                      total: {
                        show: true,
                        label: "Total",
                        formatter: function(w) {
                          return '249';
                        }
                      }
                    }
                  }
                },
                colors: ['#FF9800', '#4fa1f1', '#2B908F'],
                labels: ['Face TO Face', 'E-Consult', 'Available']
              
              }
            }
          ]
          break;
        default:
          throw Error('Invalid chart type')
      }

    })
  }

  // private getRadialBarCharts() {
  //   this.chartService.getRadialBarCharts(this.authService.currentUserValue.data.role).subscribe(res => {
  //     this.charts = res
  //   })
  // }

}
