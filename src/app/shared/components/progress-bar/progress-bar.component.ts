import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() current = 0;
  @Input() total = 0;

  get percent(): number {
    if (this.total === 0) return 0;
    return Math.round((this.current / this.total) * 100);
  }

  get progressPercent(): number {
    if (this.total === 0) return 0;
    return Math.round((this.current / this.total) * 100);
  }
}
