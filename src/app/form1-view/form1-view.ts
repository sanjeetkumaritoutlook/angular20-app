import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Result1View } from '../result1-view/result1-view';
@Component({
  selector: 'app-form1-view',
  imports: [Result1View, ReactiveFormsModule, CommonModule],
  templateUrl: './form1-view.html',
  styleUrl: './form1-view.scss'
})
export class Form1View {
  form;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['']
    });
  }

  submitForm() {
    this.submitted = true;
    console.log('Form submitted:', this.form.value);
  }
}
