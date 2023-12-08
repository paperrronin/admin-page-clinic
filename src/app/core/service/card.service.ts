import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(public http: HttpClient) { }

  public getDocCards(): Observable<Card[]> {
    return this.http
      .get<Card[]>(`${environment.apiUrl}/doctorCards`)
      .pipe(map(cards => {
        if (!cards) {
          return []
        }
        return cards
      }))
  }

}
