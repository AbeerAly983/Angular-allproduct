import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _HttpClient = inject(HttpClient);
  getProducts(): Observable<any> {
    return this._HttpClient.get<any>(`https://fakestoreapi.com/products`);
  }
}
