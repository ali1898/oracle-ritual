import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../core/models/card.model';

import { LanguageService } from '../../../core/services/language.service';

@Component({
    selector: 'app-cipher-card',
    imports: [],
    templateUrl: './cipher-card.component.html',
    styleUrl: './cipher-card.component.scss'
})
export class CipherCardComponent {
  @Input({ required: true }) card!: Card;
  @Output() answered = new EventEmitter<boolean>();

  constructor(public langService: LanguageService) {}

  choose(value: boolean) {
    this.answered.emit(value);
  }
}
