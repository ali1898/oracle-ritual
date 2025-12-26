import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  cards = this.gameService.cards;

  constructor(private gameService: GameService, private router: Router) {}

  answer(card: any, value: boolean) {
    card.answer = value;
  }

  finish() {
    this.router.navigate(['/result']);
  }
}
