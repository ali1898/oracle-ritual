import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../core/models/card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cipher-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cipher-card.component.html',
  styleUrl: './cipher-card.component.scss',
})
export class CipherCardComponent {
  @Input({ required: true }) card!: Card;
  @Output() answered = new EventEmitter<boolean>();

  choose(value: boolean) {
    this.answered.emit(value);
  }
}
