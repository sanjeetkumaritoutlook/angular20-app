import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {defineCustomElements} from 'air-components/loader';
defineCustomElements(window);
@Component({
  selector: 'app-chinese-ds',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './chinese-ds.html',
  styleUrl: './chinese-ds.scss'
})
export class ChineseDs {

}
