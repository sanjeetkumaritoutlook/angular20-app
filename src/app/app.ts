import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './product/product';
import { Rte } from './rte/rte';
import { Porsche } from './porsche/porsche';
import { ChineseDs } from './chinese-ds/chinese-ds';
import { Modal } from './modal/modal';
import { CommonModule } from '@angular/common';
//import { FabricUi } from './fabric-ui/fabric-ui';
//import { NewExamples } from './new-examples/new-examples';
import { PolicyForm } from './policy-form/policy-form';
import { Container } from './container/container';
import { Form1View } from './form1-view/form1-view';
import { Card } from './card/card';
import { First } from './first/first';
import { Second } from './second/second';
import { LargeForm } from './large-form/large-form';
import { DynamicForm } from './dynamic-form/dynamic-form';
//import { DynamicSchemaForm } from './dynamic-schema-form/dynamic-schema-form';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Product,Rte,Porsche,ChineseDs,Modal,CommonModule,PolicyForm,Container,Form1View,Card,First,Second,
    LargeForm,DynamicForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular20-app';
  /*
  Angular event binding + input/output pattern. 
  It keeps your modal stateless and reusable, and lets the parent manage visibility cleanly.
  */
   showModal = false;
    openModal() {
    this.showModal = true;
  }

  handleModalClosed() {
    this.showModal = false;
  }
}
