import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { FormSchemaService } from '../form-schema.service';

@Component({
  selector: 'app-dynamic-schema-form',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-schema-form.html',
  styleUrl: './dynamic-schema-form.scss'
})
export class DynamicSchemaForm implements OnInit {
form!: FormGroup;
  fields: any[] = [];

  constructor(private fb: FormBuilder, private schemaService: FormSchemaService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.schemaService.loadSchema().subscribe((schema) => {
      this.fields = schema.fields;
      this.createForm(this.fields);
       // 🔑 prevent ExpressionChanged error
      this.cdr.detectChanges();
    });
  }

  createForm(fields: any[]) {
    const group: any = {};
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        group[field.name] = new FormControl([]); // multiple values
      } else {
        group[field.name] = new FormControl('');
      }
    });
    this.form = this.fb.group(group);
  }

  onCheckboxChange(event: any, field: any, option: string) {
    const control = this.form.get(field.name);
    if (event.target.checked) {
      control?.setValue([...(control.value || []), option]);
    } else {
      control?.setValue((control.value || []).filter((v: any) => v !== option));
    }
  }

  submit() {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
