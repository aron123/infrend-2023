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

  getOneProduct(id: number) {
    return this.http.get<ProductDTO>('/api/products/' + id);
  }

  deleteProduct(id: number) {
    return this.http.delete('/api/products/' + id);
  }

  createProduct(product: ProductDTO) {
    return this.http.post<ProductDTO>('/api/products', product);
  }

  editProduct(product: ProductDTO) {
    return this.http.put<ProductDTO>('/api/products', product);
  }
}
