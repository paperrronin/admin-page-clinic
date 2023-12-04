import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/core/models/chart';
import { ChartType } from 'src/app/core/models/chartEnum';
import { AuthService } from 'src/app/core/service/auth.service';
import { ChartService } from 'src/app/core/service/chart.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public basicAreaCharts: Chart[];
  public patientCharts: Chart[];
  public reportCharts: Chart[];

  constructor(
    public chartService: ChartService,
    public authService: AuthService) { }

  ngOnInit() {
    this.buildCharts(ChartType.AreaBasic)
    this.buildCharts(ChartType.AreaSpline)
    this.buildCharts(ChartType.Column)
  }

  private buildCharts(type: ChartType) {
    
    this.chartService.getCharts(type, this.authService.currentUserValue.data.role).subscribe(res => {
      switch (type) {
        case ChartType.AreaBasic:
          this.basicAreaCharts = res
          break;
        case ChartType.AreaSpline:
          this.patientCharts = res
          break;
        case ChartType.Column:
          this.reportCharts = res
          break;
        default:
          throw Error('Invalid chart type')
      }

    })
  }

}




