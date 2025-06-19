import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUploadComponent } from './pages/product-upload/product-upload.component';
import { SharedMaterialModule } from '../../shared/modules/shared-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductExitDialogComponent } from './pages/product-list/product-exit-dialog/product-exit-dialog.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUploadComponent,
    ProductExitDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
