import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export class ResultComponent {
  result = this.gameService.calculateResult();

  constructor(
    public langService: LanguageService,
    private gameService: GameService,
    private router: Router
  ) {}

  restart() {
    this.router.navigate(['/']);
  }
}
