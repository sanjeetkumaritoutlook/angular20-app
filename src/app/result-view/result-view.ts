import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-result-view',
  imports: [CommonModule],
   template: `
    <h2>Result View</h2>
    <p>✅ You submitted the form!</p>
    <button (click)="goBack.emit()">Go Back</button>
  `,
  styleUrl: './result-view.scss'
})
export class ResultView {
 @Output() goBack = new EventEmitter<void>();
}
