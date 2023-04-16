import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from 'webshop-models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductDTO[]> {
    return this.http.get<ProductDTO[]>('/api/products');
  }
}
