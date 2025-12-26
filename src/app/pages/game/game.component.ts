import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Card } from '../../core/models/card.model';
import { CipherCardComponent } from '../../shared/components/cipher-card/cipher-card.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, CipherCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  cards: Card[] = this.gameService.cards;

  constructor(private gameService: GameService, private router: Router) {}

  onAnswered(card: Card, value: boolean) {
    card.answer = value;
  }

  get canFinish(): boolean {
    return this.cards.every((c) => c.answer !== null);
  }

  finish() {
    if (!this.canFinish) return;
    this.router.navigate(['/result']);
  }
}
