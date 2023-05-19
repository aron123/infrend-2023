import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryDTO, ProductDTO, UserDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    price: this.formBuilder.control(0),
    imgUrl: this.formBuilder.control(''),
    brand: this.formBuilder.control(''),
    categories: this.formBuilder.control<CategoryDTO[]>([]),
    seller: this.formBuilder.control<UserDTO | null>(null)
  });

  isNewProduct = true;

  categories: CategoryDTO[] = [];

  users: UserDTO[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewProduct = false;

      this.productService.getOne(id).subscribe({
        next: (product) => {
          this.productForm.setValue(product);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba a termékadatok betöltésekor.', 'Hiba');
        }
      });
    }

    this.categoryService.getAll().subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a kategóriák betöltésekor.', 'Hiba');
      }
    });

    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a felhasználók betöltésekor.', 'Hiba');
      }
    });
  }

  saveProduct() {
    const product = this.productForm.value as ProductDTO;

    if (this.isNewProduct) {
      this.productService.create(product).subscribe({
        next: (insertedProduct) => {
          this.toastrService.success('Sikeres mentés, azonosító: ' + insertedProduct.id, 'Siker');
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a mentéskor.', 'Hiba');
        }
      })
    }
    else {
      this.productService.update(product).subscribe({
        next: () => {
          this.toastrService.success('Sikeres módosítás.', 'Siker');
        },
        error: (err) => {
          console.error(err);
          this.toastrService.error('Hiba történt a módosításkor.', 'Hiba');
        }
      })
    }
    
  }

  compareObjects(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id == obj2.id;
  }
}
