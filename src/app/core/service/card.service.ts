import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(public http: HttpClient) { }

  public getCards(role:Role): Observable<Card[]> {
    let URL:string = `${environment.apiUrl}/get` + role.toString() + 'Cards' 
    return this.http
      .get<Card[]>(URL)
      .pipe(map(cards => {
        if (!cards) {
          return []
        }
        return cards
      }))
  }

}
