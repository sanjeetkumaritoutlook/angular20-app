import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-view',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Form View</h2>
    <form [formGroup]="form" (ngSubmit)="submitForm()">
      <label>Name: <input formControlName="name" /></label><br /><br />
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrl: './form-view.scss'
})
export class FormView {
@Output() submitted = new EventEmitter<void>();

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['']
    });
  }

  submitForm() {
    console.log('Form submitted:', this.form.value);
    this.submitted.emit(); // Notify parent to show next component
  }
}
