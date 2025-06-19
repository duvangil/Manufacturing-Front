import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExitDialogComponent } from './product-exit-dialog.component';

describe('ProductExitDialogComponent', () => {
  let component: ProductExitDialogComponent;
  let fixture: ComponentFixture<ProductExitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductExitDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
