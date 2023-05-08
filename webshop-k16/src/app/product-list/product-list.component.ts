import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductDTO[] = [];

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => { this.products = products },
      error: (err) => {
        this.toastrService.error('A termék lista betöltésekor hiba keletkezett.', 'Hiba');
      }
    });
  }
}
