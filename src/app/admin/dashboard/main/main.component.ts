import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'src/app/core/models/chart';
import { ChartService } from 'src/app/core/service/chart.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public charts:Chart[];

  constructor(public chartService:ChartService) { }
  
  ngOnInit() {
    this.chartService.getCharts().subscribe(res =>{
      this.charts = res
    }) 
  }
}
