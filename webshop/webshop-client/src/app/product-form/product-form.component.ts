import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryDTO, ProductDTO, UserDTO } from 'webshop-models';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  users: UserDTO[] = [];

  categories: CategoryDTO[] = [];

  productForm = this.formBuilder.group({
    id: [0],
    title: [''],
    description: [''],
    price: [0],
    imgUrl: ['https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'],
    brand: [''],
    user: this.formBuilder.control<UserDTO | null>(null),
    categories: this.formBuilder.control<CategoryDTO[]>([])
  });

  isNewModel = true;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private userService: UserService,
    private categoryService: CategoryService,
    private notificationService: ToastrService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isNewModel = false;
      this.productService.getOneProduct(parseInt(productId)).subscribe({
        next: (product) => this.productForm.setValue(product),
        error: (err) => {
          console.error(err);
          this.notificationService.error('Can not load product.', 'Error');
        }
      })
    }

    this.userService.getUsers().subscribe({
      next: (users) => this.users = users,
      error: (err) => {
        console.error(err);
        this.notificationService.error('Can not load users.', 'Error');
      }
    });

    this.categoryService.getAllCategories().subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => {
        console.error(err);
        this.notificationService.error('Can not load categories.', 'Error');
      }
    });
  }

  resetForm() {
    const defaultData: ProductDTO = {
      id: 0,
      title: '',
      description: '',
      price: 0,
      imgUrl: 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png',
      brand: '',
      user: null,
      categories: []
    };

    this.productForm.setValue(defaultData);
  }

  saveProduct() {
    const product = this.productForm.value as ProductDTO;

    if (this.isNewModel) {
      this.createProduct(product);
    } else {
      this.editProduct(product);
    }
  }

  createProduct(product: ProductDTO) {
    this.productService.createProduct(product).subscribe({
      next: (product) => {
        this.notificationService.success('Product is created with id ' + product.id, 'Created');
        this.resetForm();
      },
      error: (err) => {
        console.log(err);
        this.notificationService.error('Unable to save product.', 'Error');
      }
    });
  }

  editProduct(product: ProductDTO) {
    this.productService.editProduct(product).subscribe({
      next: (product) => {
        this.notificationService.success('Product is modified successfully', 'Modified');
        this.resetForm();
      },
      error: (err) => {
        console.log(err);
        this.notificationService.error('Unable to save product.', 'Error');
      }
    });
  }

  compareUsers(user1: UserDTO, user2: UserDTO): boolean {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(cat1: UserDTO, cat2: UserDTO): boolean {
    return cat1 && cat2 && cat1.id === cat2.id;
  }
}
