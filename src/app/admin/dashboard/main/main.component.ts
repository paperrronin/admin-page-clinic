import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/core/models/chart';
import { ChartService } from 'src/app/core/service/chart.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public charts: Chart[];
  public patientChart: Chart;
  public reportChart: Chart;

  constructor(public chartService: ChartService) { }

  ngOnInit() {
    this.smallChartBuild();
    this.patientChartBuild();
    this.reportChartBuild();
  }

  private smallChartBuild() {
    this.chartService.getSmallCharts().subscribe(res => {
      this.charts = res
    })
  }

  private patientChartBuild() {
    // this.patientChart = 
    //   {
    //   id:4, 
    //   chartOptions:{ 
    //   series: [
    //       {
    //         name: "New Patients",
    //         data: [31, 40, 28, 51, 42, 85, 77]
    //       },
    //       {
    //         name: "Old Patients",
    //         data: [11, 32, 45, 32, 34, 52, 41]
    //       }
    //     ],
    //     chart: {
    //       height: 350,
    //       type: "area",
    //       toolbar: {
    //         show: false
    //       },
    //       foreColor: "#9aa0ac"
    //     },
    //     colors: ["#407fe4", "#908e8e"],
    //     dataLabels: {
    //       enabled: false
    //     },
    //     stroke: {
    //       curve: "smooth"
    //     },
    //     xaxis: {
    //       type: "datetime",
    //       categories: [
    //         "2018-09-19",
    //         "2018-09-20",
    //         "2018-09-21",
    //         "2018-09-22",
    //         "2018-09-23",
    //         "2018-09-24",
    //         "2018-09-25"
    //       ]
    //     },
    //     legend: {
    //       show: true,
    //       position: "top",
    //       horizontalAlign: "center",
    //       offsetX: 0,
    //       offsetY: 0
    //     },

    //     tooltip: {
    //       theme: "dark",
    //       marker: {
    //         show: true
    //       },
    //       x: {
    //         show: true
    //       }
    //     }
    //   }
    // }
    this.chartService.getPatientChart().subscribe(res => {
      this.patientChart = res;
    })
  }

  private reportChartBuild() {
    this.chartService.getReportChart().subscribe(res => {
      this.reportChart = res;
    })
    // this.reportChart = {
  //   id:5,
  //   chartOptions:{ 
  //     series: [
  //       {
  //         name: 'Colds and Flu',
  //         data: [44, 55, 41, 67, 22, 43],
  //       },
  //       {
  //         name: 'Headaches',
  //         data: [13, 23, 20, 8, 13, 27],
  //       },
  //       {
  //         name: 'Malaria',
  //         data: [11, 17, 15, 15, 21, 14],
  //       },
  //       {
  //         name: 'Typhoid',
  //         data: [21, 7, 25, 13, 22, 8],
  //       },
  //     ],
  //     chart: {
  //       type: 'bar',
  //       height: 350,
  //       foreColor: '#9aa0ac',
  //       stacked: true,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           legend: {
  //             position: 'bottom',
  //             offsetX: -10,
  //             offsetY: 0,
  //           },
  //         },
  //       },
  //     ],
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: '30%',
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     xaxis: {
  //       type: 'category',
  //       categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     fill: {
  //       opacity: 0.8,
  //       colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F'],
  //     },
  //     tooltip: {
  //       theme: 'dark',
  //       marker: {
  //         show: true,
  //       },
  //       x: {
  //         show: true,
  //       },
  //     },
  //   }
  // };
  }
  
}


