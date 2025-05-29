import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

interface ProductInterface {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
 // Signals
  products = signal<ProductInterface[]>([]);
  selectedProduct = signal<ProductInterface | null>(null);

  // Typed Form
  productForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    price: new FormControl<number>(0, { nonNullable: true }),
  });

  constructor() {
    // Load from local storage on init
    const saved = localStorage.getItem('products');
    if (saved) this.products.set(JSON.parse(saved));

    // Auto-save to localStorage when products change
    effect(() => {
      localStorage.setItem('products', JSON.stringify(this.products()));
    });
  }

  addProduct() {
    const form = this.productForm.value;
    if (form.name && form.price != null) {
      const newProduct: ProductInterface = {
        name: form.name,
        price: form.price,
      };
      this.products.update((list) => [...list, newProduct]);
      this.productForm.reset({ name: '', price: 0 });
    }
  }

  selectProduct(product: ProductInterface) {
    this.selectedProduct.set(product);
  }
}
