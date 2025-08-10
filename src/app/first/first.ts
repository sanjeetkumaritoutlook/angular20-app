import { Component } from '@angular/core';
import { MyShared } from '../my-shared';
import { myReusableMethod } from '../utils/my-utils';
@Component({
  selector: 'app-first',
  imports: [],
    template: `<button (click)="callMethod()">Call Method</button><button (click)="callUtilityFn()">Call callUtilityFn</button>`,
  styleUrl: './first.scss'
})
export class First {
  constructor(private sharedService: MyShared) {}
callMethod() {
    const result = this.sharedService.myReusableMethod('from first');
    console.log(result);
  }
callUtilityFn() {
  const result = myReusableMethod('from first');
  console.log(result);
}
}
