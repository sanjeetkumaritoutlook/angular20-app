import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormState } from '../form-state';
@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})

/*
Works well with your in-memory persistence

Supports circular form navigation
https://github.com/troch/angular-multi-step-form
https://medium.com/netanelbasal/create-a-multi-step-form-in-angular-44cdc5b75cdc
https://stackblitz.com/edit/multi-step-modal?file=main.ts
*/
export class Modal implements OnInit {
 // @Input() isVisible: boolean = true; // You can also control this from parent
  //better to have control from parent show that modal can be shown or hidden when required
  @Output() modalClosed = new EventEmitter<void>();

 currentStep = 1;
  totalSteps = 3;
  form: FormGroup;

  //initialized form in constructor
  // This is a common pattern to ensure the form is ready when the component initializes.
  constructor(
    private fb: FormBuilder,
    private formState: FormState
  ) {
     this.form = this.fb.group({
    name: [''],
    age: ['']
  });
  }

  ngOnInit() {
    this.initForm();
    this.loadFormData();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
      age: ['']
    });
  }

  loadFormData() {
    const data = this.formState.getFormData(this.currentStep);
    this.form.patchValue(data);
  }

  saveFormData() {
    this.formState.setFormData(this.currentStep, this.form.value);
  }

  next() {
    this.saveFormData();
    this.currentStep = this.currentStep === this.totalSteps ? 1 : this.currentStep + 1;
    this.loadFormData();
  }

  previous() {
    this.saveFormData();
    this.currentStep = this.currentStep === 1 ? this.totalSteps : this.currentStep - 1;
    this.loadFormData();
  }

  closeModal() {
    this.formState.clearAll();
    // this.isVisible = false; // Hides the modal
      this.modalClosed.emit(); // (hide from the parent 2nd option)
  }
}
