import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface FieldSchema {
  type: 'text' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea';
  name: string;
  label: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.scss'
})
export class DynamicForm {
  form!: FormGroup;

  schema: FieldSchema[] = [
    { type: 'text', name: 'firstName', label: 'First Name', placeholder: 'Enter your first name', required: true },
    { type: 'text', name: 'lastName', label: 'Last Name', placeholder: 'Enter your last name', required: true },
    { type: 'number', name: 'age', label: 'Age', placeholder: 'Enter your age' },
    { type: 'date', name: 'dob', label: 'Date of Birth' },
    { type: 'select', name: 'gender', label: 'Gender', options: ['Male', 'Female', 'Other'], required: true },
    { type: 'radio', name: 'maritalStatus', label: 'Marital Status', options: ['Single', 'Married', 'Other'] },
    { type: 'checkbox', name: 'skills', label: 'Skills', options: ['Angular', 'React', 'Vue', 'Node.js'] },
    { type: 'textarea', name: 'address', label: 'Address', placeholder: 'Enter your address' },
    { type: 'text', name: 'email', label: 'Email', placeholder: 'Enter your email', required: true },
    { type: 'text', name: 'phone', label: 'Phone Number', placeholder: 'Enter phone number' },
    { type: 'select', name: 'country', label: 'Country', options: ['India', 'USA', 'UK', 'Germany'], required: true },
    { type: 'select', name: 'state', label: 'State', options: ['Bihar', 'Karnataka', 'Maharashtra', 'Delhi'] },
    { type: 'date', name: 'joiningDate', label: 'Joining Date' },
    { type: 'radio', name: 'employmentType', label: 'Employment Type', options: ['Full-time', 'Part-time', 'Intern'] },
    { type: 'checkbox', name: 'hobbies', label: 'Hobbies', options: ['Reading', 'Traveling', 'Gaming', 'Music'] },
    { type: 'textarea', name: 'bio', label: 'Short Bio', placeholder: 'Tell us about yourself' },
    { type: 'number', name: 'experience', label: 'Years of Experience' },
    { type: 'select', name: 'education', label: 'Education', options: ['High School', 'Bachelor', 'Master', 'PhD'] },
    { type: 'text', name: 'designation', label: 'Designation', placeholder: 'Enter your job title' },
    { type: 'text', name: 'company', label: 'Company', placeholder: 'Enter company name' }
  ];

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    const controls: any = {};
    this.schema.forEach(field => {
      if (field.type === 'checkbox') {
        controls[field.name] = [[]]; // store selected options as array
      } else {
        controls[field.name] = field.required ? ['', Validators.required] : [''];
      }
    });
    this.form = this.fb.group(controls);
  }

  onCheckboxChange(fieldName: string, option: string, event: Event) {
    const control = this.form.get(fieldName);
    if (!control) return;

    const value = control.value || [];

    if ((event.target as HTMLInputElement).checked) {
      control.setValue([...value, option]);
    } else {
      control.setValue(value.filter((v: string) => v !== option));
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ Form Values:', this.form.value);
      alert('Form submitted successfully! Check console for values.');
    } else {
      alert('Form is invalid. Please fill all required fields.');
    }
  }
}
