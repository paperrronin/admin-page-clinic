import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'src/app/core/models/chart';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public charts:Chart[]
  constructor() {
    this.charts = [
      {
        id:0,
        icon:"face",
        title:"Appointments",
        subtitle:"650",
        cssStyle:"bg-purple",
        chartOptions:{
        series: [
          {
            name: "APPOINTMENTS",
            data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
          }
        ],
        theme: {
          mode: 'light', 
          palette: 'palette10', 
          monochrome: {
              enabled: true,
              color: '#7D02EB',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
        },
        chart: {
          id:'0',
          type: "area",
          height: 175,
          zoom: {
            enabled: false
          },
          // foreColor: '#6777ef',
          toolbar: {
            show: false,
          }
          
          
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.65,
            opacityTo: 0.5,          
          }
        },
        labels: [
          '16 August 2018',
          '17 August 2018',
          '18 August 2018',
          '19 August 2018',
          '20 August 2018',
          '21 August 2018',
          '22 August 2018',
          '23 August 2018',
          '24 August 2018',
          '25 August 2018',
          '26 August 2018',
          '27 August 2018',
          '28 August 2018',
          '29 August 2018',
          '30 August 2018',
          '31 August 2018',
        ],
        xaxis: {
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false,}
        },
        yaxis: {
          show: false
        }
        }
      },
      {
        id:1,
        icon:"content_cut",
        title:"Operations",
        subtitle:"54",
        cssStyle:"bg-orange",
        chartOptions:{
        series: [
          {
            name: "OPERATIONS",
            data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
          }
        ],
        chart: {
          id:'1',
          type: "area",
          height: 175,
          zoom: {
            enabled: false
          },
          // foreColor: '#6777ef',
          toolbar: {
            show: false,
          }
          
          
        },
        theme: {
          mode: 'light', 
          palette: 'palette2', 
          monochrome: {
              enabled: true,
              color: '#FF9800',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          // colors: ["#FF9800"],
        },
        fill: {
          type: "gradient",
          gradient: {
            // gradientToColors: ['#fd7e14'],
            opacityFrom: 0.65,
            opacityTo: 0.5,
          }
        },
        labels: [
          '16 August 2018',
          '17 August 2018',
          '18 August 2018',
          '19 August 2018',
          '20 August 2018',
          '21 August 2018',
          '22 August 2018',
          '23 August 2018',
          '24 August 2018',
          '25 August 2018',
          '26 August 2018',
          '27 August 2018',
          '28 August 2018',
          '29 August 2018',
          '30 August 2018',
          '31 August 2018',
        ],
        xaxis: {
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false,}
        },
        yaxis: {
          show: false
        }
      }
      },
      {
        id:2,
        icon:"person_add",
        title:"New Patients",
        subtitle:"129",
        cssStyle:"bg-green",
        chartOptions:{
        series: [
          {
            name: "NEW PATIENTS",
            data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
          }
        ],
        chart: {
          id:'2',
          type: "area",
          height: 175,
          zoom: {
            enabled: false
          },
          // foreColor: '#6777ef',
          toolbar: {
            show: false,
          }
          
          
        },
        theme: {
          mode: 'light', 
          palette: 'palette5', 
          monochrome: {
              enabled: false,
              color: '#2B908F',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          colors: ["#4caf50"],
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ['#4caf50'],
            opacityFrom: 0.65,
            opacityTo: 0.5,
          }
        },
        labels: [
          '16 August 2018',
          '17 August 2018',
          '18 August 2018',
          '19 August 2018',
          '20 August 2018',
          '21 August 2018',
          '22 August 2018',
          '23 August 2018',
          '24 August 2018',
          '25 August 2018',
          '26 August 2018',
          '27 August 2018',
          '28 August 2018',
          '29 August 2018',
          '30 August 2018',
          '31 August 2018',
        ],
        xaxis: {
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false,}
        },
        yaxis: {
          show: false
        }
      }
      },
      {
        id:3,
        icon:"local_activity",
        title:"Earning",
        subtitle:"$20,125",
        cssStyle:"bg-blue",
        chartOptions:{
        series: [
          {
            name: "EARNING",
            data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
          }
        ],
        chart: {
          id:'3',
          type: "area",
          height: 175,
          zoom: {
            enabled: false
          },
          // foreColor: '#6777ef',
          toolbar: {
            show: false,
          }
          
          
        },
        theme: {
          mode: 'light', 
          palette: 'palette2', 
          monochrome: {
              enabled: false,
              color: '#03A9F4',
              shadeTo: 'light',
              shadeIntensity: 0.65
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          colors: ["#2196f3"],
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: ['#2196f3'],
            opacityFrom: 0.65,
            opacityTo: 0.5,
          }
        },
        labels: [
          '16 August 2018',
          '17 August 2018',
          '18 August 2018',
          '19 August 2018',
          '20 August 2018',
          '21 August 2018',
          '22 August 2018',
          '23 August 2018',
          '24 August 2018',
          '25 August 2018',
          '26 August 2018',
          '27 August 2018',
          '28 August 2018',
          '29 August 2018',
          '30 August 2018',
          '31 August 2018',
        ],
        xaxis: {
          labels: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          axisTicks: {
            show: false,}
        },
        yaxis: {
          show: false
        }
      }
      }
    ]
  }
  ngOnInit() {

  }

}
