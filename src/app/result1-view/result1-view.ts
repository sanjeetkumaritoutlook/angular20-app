import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-result1-view',
  imports: [CommonModule],
  templateUrl: './result1-view.html',
  styleUrl: './result1-view.scss'
})
export class Result1View {
 @Input() name = '';
  @Output() goBack = new EventEmitter<void>();

    show = false; //this is for ng-template example
}
