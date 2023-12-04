import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTooltip,
    ApexYAxis,
    ApexPlotOptions,
    ApexStroke,
    ApexLegend,
    ApexFill,
    ApexResponsive,
    ApexTitleSubtitle,
    ApexGrid,
    ApexTheme,
    ApexNonAxisChartSeries,
  } from 'ng-apexcharts';
export type ChartOptions = {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    subtitle: ApexTitleSubtitle;
    grid:ApexGrid;
    plotOptions:ApexPlotOptions;
    fill:ApexFill;
    theme:ApexTheme;
    colors: string[];
    tooltip: ApexTooltip;
    responsive: ApexResponsive[];
  };