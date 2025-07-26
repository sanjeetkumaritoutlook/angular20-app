import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormView } from '../form-view/form-view';
import { ResultView } from '../result-view/result-view';
@Component({
  selector: 'app-container',
  imports: [CommonModule, FormView, ResultView],
  template: `
    <ng-container *ngIf="currentView === 'form'">
      <app-form-view (submitted)="showResultView()"></app-form-view>
    </ng-container>

    <ng-container *ngIf="currentView === 'result'">
      <app-result-view (goBack)="showFormView()"></app-result-view>
    </ng-container>
  `,
  styleUrl: './container.scss'
})
export class Container {
currentView: 'form' | 'result' = 'form';

  showResultView() {
    this.currentView = 'result';
  }

  showFormView() {
    this.currentView = 'form';
  }
}
