import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chart } from '../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(public http: HttpClient) { }

  private patientData = '../../../assets/data/patientListChart.json';
  private reportData = '../../../assets/data/reportChart.json';

  public getSmallCharts(): Observable<Chart[]> {
    return this.http
      .get<Chart[]>(`${environment.apiUrl}/charts`)
      .pipe(map(charts => {
        if (!charts) {
          return []
        }
        return charts
      }))
  }

  public getPatientChart(): Observable<Chart> {
    return this.http.get<Chart>(this.patientData)
  }

  public getReportChart(): Observable<Chart> {
    return this.http.get<Chart>(this.reportData);
  }
}



