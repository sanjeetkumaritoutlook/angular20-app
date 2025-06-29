import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormState {

private formsData: { [step: number]: any } = {};

  setFormData(step: number, data: any) {
    this.formsData[step] = data;
  }

  getFormData(step: number): any {
    return this.formsData[step] || {};
  }

  clearAll() {
    this.formsData = {};
  }
}
