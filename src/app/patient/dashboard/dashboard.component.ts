import { Component } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { AuthService } from 'src/app/core/service/auth.service';
import { CardService } from 'src/app/core/service/card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public name: string;
  public cards: Card[];

  constructor(
    public authService: AuthService,
    public cardService: CardService) { }

  ngOnInit() {
    this.getPatientName()
    this.getCards()
  }

  private getPatientName(): string {
    this.name = this.authService.currentUserValue.data.username
    return this.name
  }

  private getCards() {
    return this.cardService.getCards(this.authService.currentUserValue.data.role).subscribe(res => {
      res.map(el => {
        if (el.rise_fall === "Higher") {
          el.cardFontColor = "col-green"
          this.cards = res
        } else {
          el.cardFontColor = "col-red"
          this.cards = res
        }
      })
    })
  }

}
