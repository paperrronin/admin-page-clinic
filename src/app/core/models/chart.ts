import { ChartOptions } from "./chartOptions";

export class Chart {
    id: number;
    icon?:string;
    title?:string;
    subtitle?:string;
    cssStyle?:string;
    chartOptions:Partial<ChartOptions>
  }