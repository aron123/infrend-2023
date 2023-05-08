import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    price: this.formBuilder.control(0),
    imgUrl: this.formBuilder.control(''),
    brand: this.formBuilder.control('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  saveProduct() {
    const product = this.productForm.value as ProductDTO;

    this.productService.create(product).subscribe({
      next: (product) => {
        this.toastrService.success('Termék sikeresen hozzáadva, id:' + product.id, 'Siker');
      },
      error: (err) => {
        this.toastrService.error('A termék hozzáadása nem sikerült.', 'Hiba');
      }
    });
  }
}
