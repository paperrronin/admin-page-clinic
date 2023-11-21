import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chart } from '../models/chart';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  public chartList: Observable<Chart[]>;
  // public chartList:Chart[]

  constructor(public http: HttpClient) { }

  getCharts():any{
    return this.http
      .get<Chart[]>(`${environment.apiUrl}/charts`)
      .pipe(map(charts => {
        if (!charts) {
          return []
        }
        return charts
      }))
    }
  }
   


