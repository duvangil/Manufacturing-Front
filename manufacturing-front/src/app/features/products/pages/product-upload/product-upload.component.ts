import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service.ts.service';

@Component({
  selector: 'app-product-upload',
  standalone: false,
  templateUrl: './product-upload.component.html',
  styleUrl: './product-upload.component.scss'
})
export class ProductUploadComponent {

  selectedFile: File | null = null;
  uploadSuccess = false;
  uploadError: string | null = null;

  constructor(private productService: ProductService) {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
    }
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.productService.uploadExcel(formData).subscribe({
      next: () => {
        this.uploadSuccess = true;
        this.uploadError = null;
        this.selectedFile = null;
      },
      error: (err) => {
        this.uploadError = 'Error al cargar archivo';
        this.uploadSuccess = false;
        console.error(err);
      }
    });
  }

}
