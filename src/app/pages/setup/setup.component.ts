import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { Router } from '@angular/router';
import { TEXTS } from '../../core/constants/texts';
import { LanguageService } from '../../core/services/language.service';
import { LayoutComponent } from "../../shared/layout/layout.component";

@Component({
    selector: 'app-setup',
    imports: [LayoutComponent],
    templateUrl: './setup.component.html',
    styleUrl: './setup.component.scss'
})
export class SetupComponent {
  lang: 'fa' | 'en' = 'fa';
  texts = TEXTS[this.lang];

  constructor(
    public langService: LanguageService,
    private gameService: GameService,
    private router: Router
  ) {}

  startGame(digits: number) {
    const max = digits === 1 ? 10 : digits === 2 ? 160 : 1000;
    this.gameService.initGame(max);
    this.router.navigate(['/game']);
  }
}
