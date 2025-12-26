import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  standalone: true,
  imports: [],
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss',
})
export class SetupComponent {
  constructor(private gameService: GameService, private router: Router) {}

  startGame(digits: number) {
    const max = digits === 1 ? 9 : digits === 2 ? 99 : 999;
    this.gameService.initGame(max);
    this.router.navigate(['/game']);
  }
}
