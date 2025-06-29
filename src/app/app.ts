import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './product/product';
import { Rte } from './rte/rte';
import { Porsche } from './porsche/porsche';
import { ChineseDs } from './chinese-ds/chinese-ds';
import { Modal } from './modal/modal';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Product,Rte,Porsche,ChineseDs,Modal,CommonModule],
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
