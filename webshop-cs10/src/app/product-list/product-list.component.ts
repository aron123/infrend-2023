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
    private router: Router,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },
      error: (err) => console.error(err)
    });
  }

  editProduct(product: ProductDTO) {
    this.router.navigate([ '/product-form', product.id ]);
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
        this.toastrService.error('Hiba a törléskor.', 'Hiba');
      }
    });
  }
}
