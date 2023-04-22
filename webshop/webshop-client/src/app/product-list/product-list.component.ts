import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'webshop-models';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductDTO[] = [];
  
  constructor(
    private router: Router,
    private productService: ProductService,
    private notificationService: ToastrService) { }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error('Unable to load products.', 'Error');
      }
    });
  }

  editProduct(product: ProductDTO) {
    this.router.navigate([ '/product-form', product.id ]);
  }

  deleteProduct(product: ProductDTO) {
    this.productService.deleteProduct(product.id).subscribe({
      next: () => {
        const index = this.products.indexOf(product);
        if (index > -1) {
          this.products.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error('Unable to delete product.', 'Error');
      }
    });
  }
}
