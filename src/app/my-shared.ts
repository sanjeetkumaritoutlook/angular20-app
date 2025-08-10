import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyShared {

  constructor() { }
    myReusableMethod(data: string) {
    console.log('Method called with:', data);
    return `Processed: ${data}`;
  }

}
