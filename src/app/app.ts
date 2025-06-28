import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './product/product';
import { Rte } from './rte/rte';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Product,Rte],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular20-app';
}
