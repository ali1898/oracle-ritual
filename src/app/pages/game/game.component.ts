import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';

import { Card } from '../../core/models/card.model';
import { CipherCardComponent } from '../../shared/components/cipher-card/cipher-card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
    selector: 'app-game',
    imports: [CipherCardComponent],
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss'
})
export class GameComponent {
  cards: Card[] = this.gameService.cards;

  constructor(
    public langService: LanguageService,
    private gameService: GameService,
    private router: Router
  ) {}

  onAnswered(card: Card, value: boolean) {
    card.answer = value;
  }

  // تعداد کارت‌ها
  get totalCount(): number {
    return this.cards.length;
  }

  // تعداد پاسخ‌های ثبت‌شده (YES یا NO)
  get answeredCount(): number {
    return this.cards.filter((c) => c.answer !== null).length;
  }

  // درصد پیشرفت (۰ تا ۱۰۰)
  get progressPercent(): number {
    return this.totalCount === 0
      ? 0
      : Math.round((this.answeredCount / this.totalCount) * 100);
  }

  get canFinish(): boolean {
    return this.cards.every((c) => c.answer !== null);
  }

  finish() {
    if (!this.canFinish) return;
    this.router.navigate(['/result']);
  }
}
