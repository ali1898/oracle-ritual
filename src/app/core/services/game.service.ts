import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({ providedIn: 'root' })
export class GameService {
  maxNumber = 99;
  cards: Card[] = [];

  initGame(maxNumber: number) {
    this.maxNumber = maxNumber;
    this.cards = [];
    const bits = Math.ceil(Math.log2(maxNumber + 1));

    for (let i = 0; i < bits; i++) {
      const bitValue = 1 << i;
      const numbers = [];

      for (let n = 0; n < maxNumber; n++) {
        if ((n & bitValue) !== 0) {
          numbers.push(n);
        }
      }
      this.cards.push(new Card(bitValue, numbers));
    }
  }

  calculateResult(): number {
    return this.cards
      .filter((c) => c.answer)
      .reduce((sum, c) => sum + c.bitValue, 0);
  }
}
