import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  TeachingBubble,
  TeachingBubbleDefinition
} from "@fabric-msft/fabric-web";


// Define the custom elements
TeachingBubbleDefinition.define();
@Component({
  selector: 'app-fabric-ui',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './fabric-ui.html',
  styleUrl: './fabric-ui.scss'
})
export class FabricUi {

}
