import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { wrapCDataIfNeeded } from '../utils/cdata-wrapper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policy-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './policy-form.html',
  styleUrl: './policy-form.scss'
})
export class PolicyForm {
form: FormGroup;
processedXmlString = ''; // 👈 to show the output
processedJsonString = ''; // 👈 JSON output


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      manuscript_content: [''],
      manuscript_body: [''],
      policyName: ['Health Cover'],
      sections: this.fb.array([])
    });
  }

  onSubmit() {
    const rawData = this.form.value;

    // ✅ Wrap CDATA where needed
    const processedData = wrapCDataIfNeeded(rawData);

    console.log('🚀 Final Data:', processedData);
    // → send processedData as XML input to Quadient
    // ✅ Display it in browser (convert object to indented JSON for display)
    this.processedJsonString  = JSON.stringify(processedData, null, 2);
     // ✅ Show XML-style format
    this.processedXmlString = this.convertToXml(processedData);
  }

  convertToXml(data: any, rootName = 'Policy'): string {
    let xml = `<${rootName}>\n`;
    for (const key in data) {
      if (!data.hasOwnProperty(key)) continue;
      const value = data[key];
      if (typeof value === 'string') {
        xml += `  <${key}>${value}</${key}>\n`;
      } else if (Array.isArray(value)) {
        xml += value.map((item: any) => this.convertToXml(item, key)).join('\n');
      } else if (typeof value === 'object' && value !== null) {
        xml += this.convertToXml(value, key);
      }
    }
    xml += `</${rootName}>\n`;
    return xml;
  }
}


