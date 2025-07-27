import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
   template: `
    <div class="card">
      <header><ng-content select="[card-title]"></ng-content></header>
      <main><ng-content></ng-content></main>
      <footer><ng-content select="[card-footer]"></ng-content></footer>
    </div>
  `,
  styleUrl: './card.scss'
})
export class Card {

}
