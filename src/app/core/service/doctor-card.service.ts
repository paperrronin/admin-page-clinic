import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocCard } from '../models/docCard';

@Injectable({
  providedIn: 'root'
})
export class DoctorCardService {

  constructor(public http: HttpClient) { }

  public getDocCards(): Observable<DocCard[]> {
    return this.http
      .get<DocCard[]>(`${environment.apiUrl}/doctorCards`)
      .pipe(map(cards => {
        if (!cards) {
          return []
        }
        return cards
      }))
  }

}
