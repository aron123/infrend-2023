import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  categories: CategoryDTO[] = [];

  categoryForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: (categories) => this.categories = categories,
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a kategóriák betöltésekor.', 'Hiba');
      }
    });
  }

  saveCategory() {
    const category = this.categoryForm.value as CategoryDTO;

    this.categoryService.create(category).subscribe({
      next: (category) => {
        this.categories.push(category);
        this.categoryForm.setValue({ id: 0, title: '' });
        this.toastrService.success('Sikeres mentés.', 'Siker');
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a kategória mentésekor.', 'Hiba');
      }
    });
  }

  deleteCategory(category: CategoryDTO) {
    this.categoryService.delete(category.id).subscribe({
      next: () => {
        const index = this.categories.indexOf(category);
        if (index > -1) {
          this.categories.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a kategória törlésekor.', 'Hiba');
      }
    });
  }
}
