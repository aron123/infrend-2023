import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO, UserDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  isNewProduct = true;

  users: UserDTO[] = [];

  productForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    price: this.formBuilder.control(0),
    imgUrl: this.formBuilder.control(''),
    brand: this.formBuilder.control(''),
    uploader: this.formBuilder.control<null | UserDTO>(null),
    //categories: this.formBuilder.array([])
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewProduct = false;

      this.productService.getOne(id).subscribe({
        next: (product) => this.productForm.setValue(product),
        error: (err) => {
          console.error(err);
          this.toastrService.error('A termékadatok betöltése sikertelen.', 'Hiba');
        }
      });
    }

    this.userService.getAll().subscribe({
      next: (users) => this.users = users,
      error: (err) => {
        console.error(err);
        this.toastrService.error('A felhasználók betöltése sikertelen.', 'Hiba');
      }
    });
  }

  saveProduct() {
    const product = this.productForm.value as ProductDTO;

    if (this.isNewProduct) {
      this.productService.create(product).subscribe({
        next: (product) => {
          this.toastrService.success('Termék sikeresen hozzáadva, id:' + product.id, 'Siker');
        },
        error: (err) => {
          this.toastrService.error('A termék hozzáadása nem sikerült.', 'Hiba');
        }
      });
    }
    else {
      this.productService.update(product).subscribe({
        next: (product) => {
          this.toastrService.success('Termék sikeresen szerkesztve', 'Siker');
        },
        error: (err) => {
          this.toastrService.error('A termék szerkesztése nem sikerült.', 'Hiba');
        }
      });
    }
    
  }

  compareUsers(user1: UserDTO, user2: UserDTO) {
    return user1 && user2 && user1.id == user2.id;
  }
}
