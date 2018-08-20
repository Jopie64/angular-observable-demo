import { Component } from '@angular/core';

interface Card {
  value: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-observable-demo';

  cards: Card[] = [];

  addCard(card: Card) {
    this.cards.push(card);
  }

  onClick() {
    this.addCard({title: 'Usefull things', value: 'Hello'});
  }

  onClear() {
    this.cards = [];
  }
}
