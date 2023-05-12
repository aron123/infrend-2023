import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => { this.products = products },
      error: (err) => {
        this.toastrService.error('A termék lista betöltésekor hiba keletkezett.', 'Hiba');
      }
    });
  }

  navigateToProductForm(id: number) {
    this.router.navigate([ '/product-form', id ]);
  }

  deleteProduct(product: ProductDTO) {
    this.productService.delete(product.id).subscribe({
      next: () => {
        const index = this.products.indexOf(product);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a termék törlésekor.', 'Hiba');
      }
    })
  }
}
