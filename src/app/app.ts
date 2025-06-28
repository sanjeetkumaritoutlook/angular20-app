import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './product/product';
import { Rte } from './rte/rte';
import { Porsche } from './porsche/porsche';
import { ChineseDs } from './chinese-ds/chinese-ds';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Product,Rte,Porsche,ChineseDs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular20-app';
}
