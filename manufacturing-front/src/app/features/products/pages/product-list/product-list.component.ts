import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service.ts.service';
import { Product } from '../../models/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductExitDialogComponent } from './product-exit-dialog/product-exit-dialog.component';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'elaborationType', 'state', 'quantity', 'dateCreated', 'actions'];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        console.log('Productos recibidos:', data);
        this.products = data;
      },
      error: (err) => console.error('Error al cargar productos', err)
    });
  }

  updateProductState(product: Product): void {
    let newState = product.state;

    if (product.quantity === 0) {
      newState = 'Salido';
    } else if (product.state === 'En stock') {
      newState = 'Defectuoso';
    } else if (product.state === 'Defectuoso') {
      newState = 'En stock';
    } else {
      return; // Si ya está en "Salido", no hacemos nada
    }

    const updatedProduct = { ...product, state: newState };
    
    console.log("🚀 ~ ProductListComponent ~ updateProductState ~ updatedProduct:", updatedProduct)
    this.productService.update(product.id, updatedProduct).subscribe({
      next: () => {
        product.state = newState;
        console.log(`Producto ${product.name} actualizado a ${newState}`);
      },
      error: (err) => console.error('Error al actualizar el estado del producto', err)
    });
  }

  openExitDialog(product: Product): void {
  const dialogRef = this.dialog.open(ProductExitDialogComponent, {
    width: '400px',
    data: { max: product.quantity }
  });

  dialogRef.afterClosed().subscribe((quantityToExit: number | undefined) => {
    if (quantityToExit && quantityToExit > 0) {
      const newQuantity = product.quantity - quantityToExit;
      const newState = newQuantity === 0 ? 'Salido' : product.state;
        this.productService.RemoveStock(product.id, quantityToExit).subscribe({
        next: () => {
          product.quantity = newQuantity;
          product.state = newState;
          console.log(`Producto ${product.name} actualizado: cantidad ${newQuantity}, estado ${newState}`);
        },
        error: (err) => console.error('Error al actualizar la cantidad del producto', err)
      });
    }
  });
}


}
