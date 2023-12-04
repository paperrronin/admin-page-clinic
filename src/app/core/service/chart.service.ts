import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Chart } from '../models/chart';
import { ChartType } from '../models/chartEnum';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(public http: HttpClient) { }


  public getCharts(type:ChartType, role:Role): Observable<Chart[]> {
    if (role == Role.All){
      role = Role.Admin
    }

    let URL:string = `${environment.apiUrl}/charts` + type.toString() + role.toString()
    return this.http
      .get<Chart[]>(URL)
      .pipe(map(charts => {
        if (!charts) {
          return []
        }
        console.log(URL)
        return charts
      }))
  }

}



