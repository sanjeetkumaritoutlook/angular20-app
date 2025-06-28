import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-rte',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rte.html',
  styleUrl: './rte.scss'
})
export class Rte {
 handleValueChanged( event:any ) { 
       console.log('VALUE CHANGED', event.detail)
  }
handleContentChanged( event:any ) { 
       console.log('CONTENT CHANGED', event.detail)
  }
}
