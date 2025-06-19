import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service.ts.service';
import { Router } from '@angular/router';
import { ElaborationTypeService } from '../../services/elaboration-type.service';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements OnInit {

  userForm!: FormGroup;
  elaborationTypes: any[] = [];
  productStates = ['En stock', 'Defectuoso', 'Salido'];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private elaborationTypeService: ElaborationTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      elaborationTypeId: [null, Validators.required],
      state: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.loadElaborationTypes();
  }

  loadElaborationTypes(): void {
    this.elaborationTypeService.getAll().subscribe({
      next: (data) => (this.elaborationTypes = data),
      error: (err) => console.error('Error al cargar tipos de elaboración', err)
    });
  }

  save(): void {
    if (this.userForm.valid) {
      this.productService.create(this.userForm.value).subscribe({
        next: () => this.router.navigate(['/dashboard/products']),
        error: (err) => console.error('Error al crear producto', err)
      });
    }
  }

}
