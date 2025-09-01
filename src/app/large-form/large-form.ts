import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-large-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './large-form.html',
  styleUrl: './large-form.scss'
})
export class LargeForm {
 form!: FormGroup;
  fields: string[] = [];

  constructor(private fb: FormBuilder) {
    this.generateForm(100); // generate 100 fields
  }

  generateForm(count: number) {
    const controls: any = {};
    for (let i = 1; i <= count; i++) {
      const fieldName = `field${i}`;
      controls[fieldName] = ['']; // default empty value
      this.fields.push(fieldName);
    }
    this.form = this.fb.group(controls);
  }

  onSubmit() {
      alert('Form submitted ✅'); // quick test
        console.log('Raw Form Object:', this.form);
    console.log('Form Values:', this.form.value);
      console.table(this.form.value); // shows values in table format

  }
}
