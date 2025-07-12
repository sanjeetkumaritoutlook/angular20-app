import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import '@telekom/scale-components/dist/scale-components/scale-components.css';
// import { applyPolyfills,defineCustomElements } from '@telekom/scale-components/loader';

// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

import { defineCustomElements } from 'protean-elements/loader';
defineCustomElements();
@Component({
  selector: 'app-new-examples',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './new-examples.html',
  styleUrl: './new-examples.scss'
})
export class NewExamples {
onChange(event: any) {
  console.log('Selected value:', event.target.value);
  // You can also access the selected option's label if needed
  const selectedOption = event.target.selectedOptions[0];
  console.log('Selected label:', selectedOption.label);   
}
}
