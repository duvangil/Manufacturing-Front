/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Product.service.tsService } from './product.service.ts.service';

describe('Service: Product.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product.service.tsService]
    });
  });

  it('should ...', inject([Product.service.tsService], (service: Product.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
