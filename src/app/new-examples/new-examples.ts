import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@telekom/scale-components/dist/scale-components/scale-components.css';
import { applyPolyfills } from '@telekom/scale-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

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

}
