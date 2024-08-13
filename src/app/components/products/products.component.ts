import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductService } from '../../core/services/product.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  private readonly _ProductService = inject(ProductService);
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._ProductService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
