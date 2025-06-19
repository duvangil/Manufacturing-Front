import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-exit-dialog',
  standalone: false,
  templateUrl: './product-exit-dialog.component.html',
  styleUrl: './product-exit-dialog.component.scss'
})
export class ProductExitDialogComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductExitDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { max: number }
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: [
        null,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(this.data.max)
        ]
      ]
    });
  }

  confirm(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.quantity);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
